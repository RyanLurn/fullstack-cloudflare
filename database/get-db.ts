import { getCloudflareContext } from "@opennextjs/cloudflare";
import { drizzle } from "drizzle-orm/d1";

function getDb() {
  const { env } = getCloudflareContext();
  const db = drizzle(env.DB);

  return db;
}

async function getDbAsync() {
  const { env } = await getCloudflareContext({ async: true });
  const db = drizzle(env.DB);

  return db;
}

export { getDb, getDbAsync };
