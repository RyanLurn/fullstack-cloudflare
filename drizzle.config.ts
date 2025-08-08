import { defineConfig } from "drizzle-kit";
import { serverEnvVars } from "@/lib/env-vars/server";

export default defineConfig({
  out: "./database/migrations",
  schema: "./database/schemas",
  dialect: "sqlite",
  driver: "d1-http",
  dbCredentials: {
    accountId: serverEnvVars.CLOUDFLARE_ACCOUNT_ID,
    databaseId: serverEnvVars.CLOUDFLARE_DATABASE_ID,
    token: serverEnvVars.CLOUDFLARE_D1_TOKEN
  }
});
