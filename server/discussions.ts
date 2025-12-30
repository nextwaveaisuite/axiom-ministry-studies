import { eq, and, desc } from "drizzle-orm";
import { discussions, comments, users, type InsertDiscussion, type InsertComment } from "../drizzle/schema";
import { getDb } from "./db";

export async function createDiscussion(data: InsertDiscussion) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  const result = await db.insert(discussions).values(data);
  return result;
}

export async function getDiscussionsByModule(pathway: string, moduleNumber: number) {
  const db = await getDb();
  if (!db) return [];
  
  const result = await db
    .select({
      discussion: discussions,
      user: {
        id: users.id,
        name: users.name,
        email: users.email,
      },
    })
    .from(discussions)
    .leftJoin(users, eq(discussions.userId, users.id))
    .where(and(eq(discussions.pathway, pathway), eq(discussions.moduleNumber, moduleNumber)))
    .orderBy(desc(discussions.createdAt));
  
  return result;
}

export async function getDiscussionById(id: number) {
  const db = await getDb();
  if (!db) return null;
  
  const result = await db
    .select({
      discussion: discussions,
      user: {
        id: users.id,
        name: users.name,
        email: users.email,
      },
    })
    .from(discussions)
    .leftJoin(users, eq(discussions.userId, users.id))
    .where(eq(discussions.id, id))
    .limit(1);
  
  return result[0] || null;
}

export async function createComment(data: InsertComment) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  const result = await db.insert(comments).values(data);
  return result;
}

export async function getCommentsByDiscussion(discussionId: number) {
  const db = await getDb();
  if (!db) return [];
  
  const result = await db
    .select({
      comment: comments,
      user: {
        id: users.id,
        name: users.name,
        email: users.email,
      },
    })
    .from(comments)
    .leftJoin(users, eq(comments.userId, users.id))
    .where(eq(comments.discussionId, discussionId))
    .orderBy(desc(comments.createdAt));
  
  return result;
}

export async function deleteDiscussion(id: number, userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  // First delete all comments
  await db.delete(comments).where(eq(comments.discussionId, id));
  
  // Then delete the discussion
  await db.delete(discussions).where(and(eq(discussions.id, id), eq(discussions.userId, userId)));
}

export async function deleteComment(id: number, userId: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  
  await db.delete(comments).where(and(eq(comments.id, id), eq(comments.userId, userId)));
}
