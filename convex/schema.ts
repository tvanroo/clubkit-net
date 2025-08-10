import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
  ...authTables,
  // Sample empty table
  sampleTable: defineTable({
    // This is an empty table for now
  }),
});
