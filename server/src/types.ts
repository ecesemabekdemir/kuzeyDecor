/* eslint-disable @typescript-eslint/no-unused-vars */

import type { SQL } from "drizzle-orm";
import type { AnySQLiteColumn } from "drizzle-orm/sqlite-core";

import { createId } from "@paralleldrive/cuid2";
import { sql } from "drizzle-orm";
import { blob, int, sqliteTableCreator, text } from "drizzle-orm/sqlite-core";
import { z } from "zod";

/**
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const dbTableNameResolver = (name: string) => `${name}`;
export const createTable = sqliteTableCreator(dbTableNameResolver);

export const now = sql`(unixepoch())`;
export const string = text;
export const number = (field: string) => int(field, { mode: "number" });
export const boolean = (field: string) => int(field, { mode: "boolean" });
export const json = (field: string) => text(field, { mode: "json" });
export const bigint = (field: string) => blob(field, { mode: "bigint" });
export const timestamp = (field: string) => int(field, { mode: "timestamp" });
export const cuid = (field: string) => string(field);

export const id = cuid("id").primaryKey().notNull().$defaultFn(createId);
export const messageId = cuid("messageId")
  .$default(() => sql`null`)
  .$type<string | null>();
export const createdAt = timestamp("created_at").default(now).notNull();
export const updatedAt = timestamp("updated_at").$onUpdate(() => new Date());
export const deletedAt = timestamp("deleted_at")
  .$default(() => sql`null`)
  .$type<Date | null>();

export const lower = (email: AnySQLiteColumn): SQL => sql`lower(${email})`;

// NOTE: since createdAt resolved at DB, updatedAt is at ORM level
// updatedAt might be greater than createdAt in subsequent inserts
