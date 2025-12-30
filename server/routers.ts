import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import * as discussionDb from "./discussions";
import { mentorRequests, prayerRequests, prayerResponses, prayerPartnerships, users } from "../drizzle/schema";
import { getDb } from "./db";
import { eq, desc, and, or, ne } from "drizzle-orm";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  discussions: router({
    getByModule: publicProcedure
      .input(z.object({ pathway: z.string(), moduleNumber: z.number() }))
      .query(async ({ input }) => {
        return await discussionDb.getDiscussionsByModule(input.pathway, input.moduleNumber);
      }),
    
    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return await discussionDb.getDiscussionById(input.id);
      }),
    
    create: protectedProcedure
      .input(z.object({
        pathway: z.string(),
        moduleNumber: z.number(),
        title: z.string(),
        content: z.string(),
      }))
      .mutation(async ({ ctx, input }) => {
        return await discussionDb.createDiscussion({
          userId: ctx.user.id,
          pathway: input.pathway,
          moduleNumber: input.moduleNumber,
          title: input.title,
          content: input.content,
        });
      }),
    
    delete: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        return await discussionDb.deleteDiscussion(input.id, ctx.user.id);
      }),
  }),
  
  comments: router({
    getByDiscussion: publicProcedure
      .input(z.object({ discussionId: z.number() }))
      .query(async ({ input }) => {
        return await discussionDb.getCommentsByDiscussion(input.discussionId);
      }),
    
    create: protectedProcedure
      .input(z.object({
        discussionId: z.number(),
        content: z.string(),
      }))
      .mutation(async ({ ctx, input }) => {
        const result = await discussionDb.createComment({
          discussionId: input.discussionId,
          userId: ctx.user.id,
          content: input.content,
        });
        
        // Get discussion details for notification
        const discussion = await discussionDb.getDiscussionById(input.discussionId);
        if (discussion) {
          // Notify discussion author
          await notifyOwner({
            title: "New Comment on Your Discussion",
            content: `${ctx.user.name || "Someone"} commented on "${discussion.discussion.title}": ${input.content.substring(0, 100)}...`,
          });
        }
        
        return result;
      }),
    
    delete: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        return await discussionDb.deleteComment(input.id, ctx.user.id);
      }),
  }),

  prayer: router({
    getMyStats: protectedProcedure.query(async ({ ctx }) => {
      const db = await getDb();
      if (!db) return { myRequests: 0, myRequestsAnswered: 0, prayersOffered: 0, myActiveRequests: 0 };
      
      // Get user's prayer requests
      const myRequests = await db.select().from(prayerRequests).where(eq(prayerRequests.userId, ctx.user.id));
      const myRequestsAnswered = myRequests.filter(r => r.isAnswered === 1).length;
      const myActiveRequests = myRequests.filter(r => r.isAnswered === 0).length;
      
      // Get prayers offered by user
      const prayersOffered = await db.select().from(prayerResponses).where(eq(prayerResponses.userId, ctx.user.id));
      
      return {
        myRequests: myRequests.length,
        myRequestsAnswered,
        myActiveRequests,
        prayersOffered: prayersOffered.length,
      };
    }),

    list: publicProcedure.query(async () => {
      const db = await getDb();
      if (!db) return [];
      const requests = await db.select().from(prayerRequests).orderBy(desc(prayerRequests.createdAt));
      return requests;
    }),
    
    create: protectedProcedure
      .input(z.object({
        title: z.string().min(1).max(255),
        description: z.string().min(1),
        isAnonymous: z.boolean().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        await db.insert(prayerRequests).values({
          userId: ctx.user.id,
          title: input.title,
          description: input.description,
          isAnonymous: input.isAnonymous ? 1 : 0,
        });
        
        return { success: true };
      }),
    
    markAnswered: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        await db.update(prayerRequests)
          .set({ isAnswered: 1 })
          .where(eq(prayerRequests.id, input.id));
        
        return { success: true };
      }),
    
    addPrayer: protectedProcedure
      .input(z.object({
        requestId: z.number(),
        prayer: z.string().min(1),
        isAnonymous: z.boolean().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        await db.insert(prayerResponses).values({
          prayerRequestId: input.requestId,
          userId: ctx.user.id,
          prayer: input.prayer,
          isAnonymous: input.isAnonymous ? 1 : 0,
        });
        
        // Increment prayer count
        const request = await db.select().from(prayerRequests).where(eq(prayerRequests.id, input.requestId)).limit(1);
        if (request.length > 0) {
          await db.update(prayerRequests)
            .set({ prayerCount: (request[0].prayerCount || 0) + 1 })
            .where(eq(prayerRequests.id, input.requestId));
        }
        
        return { success: true };
      }),
    
    getResponses: publicProcedure
      .input(z.object({ requestId: z.number() }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) return [];
        
        const responses = await db.select().from(prayerResponses)
          .where(eq(prayerResponses.prayerRequestId, input.requestId));
        
        return responses;
      }),
  }),

  prayerPartners: router({
    getSuggestions: protectedProcedure.query(async ({ ctx }) => {
      const db = await getDb();
      if (!db) return [];
      
      // Get existing partners
      const existingPartners = await db.select().from(prayerPartnerships)
        .where(
          or(
            and(eq(prayerPartnerships.requesterId, ctx.user.id), eq(prayerPartnerships.status, 'accepted')),
            and(eq(prayerPartnerships.partnerId, ctx.user.id), eq(prayerPartnerships.status, 'accepted'))
          )
        );
      
      const partnerIds = existingPartners.map(p => 
        p.requesterId === ctx.user.id ? p.partnerId : p.requesterId
      );
      
      // Return all users except current user and existing partners
      const allUsers = await db.select().from(users).where(ne(users.id, ctx.user.id));
      return allUsers.filter(u => !partnerIds.includes(u.id)).slice(0, 10);
    }),
    
    sendRequest: protectedProcedure
      .input(z.object({ partnerId: z.number(), message: z.string().optional() }))
      .mutation(async ({ ctx, input }) => {
        const db = await getDb();
        if (!db) throw new Error('Database not available');
        
        await db.insert(prayerPartnerships).values({
          requesterId: ctx.user.id,
          partnerId: input.partnerId,
          message: input.message,
          status: 'pending',
        });
        
        return { success: true };
      }),
    
    getPendingRequests: protectedProcedure.query(async ({ ctx }) => {
      const db = await getDb();
      if (!db) return [];
      
      const requests = await db.select().from(prayerPartnerships)
        .where(
          and(
            eq(prayerPartnerships.partnerId, ctx.user.id),
            eq(prayerPartnerships.status, 'pending')
          )
        );
      
      // Get requester details
      const requestsWithRequesters = await Promise.all(
        requests.map(async (req) => {
          const requester = await db.select().from(users).where(eq(users.id, req.requesterId)).limit(1);
          return { ...req, requester: requester[0] };
        })
      );
      
      return requestsWithRequesters;
    }),
    
    respondToRequest: protectedProcedure
      .input(z.object({ requestId: z.number(), accept: z.boolean() }))
      .mutation(async ({ ctx, input }) => {
        const db = await getDb();
        if (!db) throw new Error('Database not available');
        
        await db.update(prayerPartnerships)
          .set({ status: input.accept ? 'accepted' : 'declined' })
          .where(eq(prayerPartnerships.id, input.requestId));
        
        return { success: true };
      }),
    
    getActivePartnerships: protectedProcedure.query(async ({ ctx }) => {
      const db = await getDb();
      if (!db) return [];
      
      const partnerships = await db.select().from(prayerPartnerships)
        .where(
          and(
            or(
              eq(prayerPartnerships.requesterId, ctx.user.id),
              eq(prayerPartnerships.partnerId, ctx.user.id)
            ),
            eq(prayerPartnerships.status, 'accepted')
          )
        );
      
      // Get partner details
      const partnershipsWithPartners = await Promise.all(
        partnerships.map(async (p) => {
          const partnerId = p.requesterId === ctx.user.id ? p.partnerId : p.requesterId;
          const partner = await db.select().from(users).where(eq(users.id, partnerId)).limit(1);
          return { ...p, partner: partner[0] };
        })
      );
      
      return partnershipsWithPartners;
    }),
    
    endPartnership: protectedProcedure
      .input(z.object({ partnershipId: z.number() }))
      .mutation(async ({ ctx, input }) => {
        const db = await getDb();
        if (!db) throw new Error('Database not available');
        
        await db.update(prayerPartnerships)
          .set({ status: 'ended' })
          .where(eq(prayerPartnerships.id, input.partnershipId));
        
        return { success: true };
      }),
  }),

  mentors: router({
    requestMentor: protectedProcedure
      .input(z.object({
        pathway: z.string(),
        message: z.string(),
      }))
      .mutation(async ({ ctx, input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        await db.insert(mentorRequests).values({
          learnerId: ctx.user.id,
          pathway: input.pathway,
          message: input.message,
        });
        
        // Notify owner about new mentor request
        await notifyOwner({
          title: "New Mentor Request",
          content: `${ctx.user.name} requested a mentor for ${input.pathway} ministry: ${input.message.substring(0, 100)}...`,
        });
        
        return { success: true };
      }),
    
    getMyRequests: protectedProcedure
      .query(async ({ ctx }) => {
        const db = await getDb();
        if (!db) return [];
        
        return await db.select().from(mentorRequests).where(eq(mentorRequests.learnerId, ctx.user.id));
      }),
  }),
});

export type AppRouter = typeof appRouter;
