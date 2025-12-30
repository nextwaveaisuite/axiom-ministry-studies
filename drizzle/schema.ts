import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

export const prayerPartnerships = mysqlTable("prayer_partnerships", {
  id: int("id").autoincrement().primaryKey(),
  requesterId: int("requester_id").notNull(),
  partnerId: int("partner_id").notNull(),
  status: mysqlEnum("status", ["pending", "accepted", "declined", "ended"]).default("pending").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export type PrayerPartnership = typeof prayerPartnerships.$inferSelect;
export type InsertPrayerPartnership = typeof prayerPartnerships.$inferInsert;

/**
 * Prayer requests table for community prayer wall
 */
export const prayerRequests = mysqlTable("prayer_requests", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("user_id").notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  isAnswered: int("is_answered").default(0).notNull(), // 0 = active, 1 = answered
  isAnonymous: int("is_anonymous").default(0).notNull(), // 0 = show name, 1 = anonymous
  prayerCount: int("prayer_count").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().onUpdateNow().notNull(),
});

export type PrayerRequest = typeof prayerRequests.$inferSelect;
export type InsertPrayerRequest = typeof prayerRequests.$inferInsert;

/**
 * Prayer responses table for community prayer wall
 */
export const prayerResponses = mysqlTable("prayer_responses", {
  id: int("id").autoincrement().primaryKey(),
  prayerRequestId: int("prayer_request_id").notNull(),
  userId: int("user_id").notNull(),
  prayer: text("prayer").notNull(),
  isAnonymous: int("is_anonymous").default(0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type PrayerResponse = typeof prayerResponses.$inferSelect;
export type InsertPrayerResponse = typeof prayerResponses.$inferInsert;

// TODO: Add your tables here module forums
export const discussions = mysqlTable("discussions", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  pathway: varchar("pathway", { length: 50 }).notNull(), // mens, womens, youth, teaching
  moduleNumber: int("moduleNumber").notNull(), // 1-6
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export const comments = mysqlTable("comments", {
  id: int("id").autoincrement().primaryKey(),
  discussionId: int("discussionId").notNull(),
  userId: int("userId").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Discussion = typeof discussions.$inferSelect;
export type InsertDiscussion = typeof discussions.$inferInsert;
export type Comment = typeof comments.$inferSelect;
export type InsertComment = typeof comments.$inferInsert;

// Mentor assignment tables
export const mentorRequests = mysqlTable("mentorRequests", {
  id: int("id").autoincrement().primaryKey(),
  learnerId: int("learnerId").notNull(),
  pathway: varchar("pathway", { length: 50 }).notNull(),
  message: text("message"),
  status: mysqlEnum("status", ["pending", "accepted", "declined"]).default("pending").notNull(),
  mentorId: int("mentorId"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type MentorRequest = typeof mentorRequests.$inferSelect;
export type InsertMentorRequest = typeof mentorRequests.$inferInsert;