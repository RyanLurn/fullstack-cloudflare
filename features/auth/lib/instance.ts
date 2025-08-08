import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { getDb } from "@/database/get-db";

export const auth = betterAuth({
  database: drizzleAdapter(getDb(), {
    provider: "sqlite"
  })
});
