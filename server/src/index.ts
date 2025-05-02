import { drizzle } from "drizzle-orm/libsql";
import { urun } from "./db/schema";
import { createClient } from "@libsql/client";

const client = createClient({

  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_TOKEN,
});

export const db = drizzle(client, {
  schema: {
    urun,
  },
});
