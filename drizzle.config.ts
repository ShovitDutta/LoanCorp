import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema.ts",
  out: "./drizzle", // Directory for migrations
  dialect: "sqlite", // Specify the dialect
  verbose: true,
  strict: true,
});
