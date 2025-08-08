import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const serverEnvVars = createEnv({
  server: {
    CLOUDFLARE_ACCOUNT_ID: z.string().min(1),
    CLOUDFLARE_DATABASE_ID: z.string().min(1),
    CLOUDFLARE_D1_TOKEN: z.string().min(1)
  },
  experimental__runtimeEnv: process.env
});

export { serverEnvVars };
