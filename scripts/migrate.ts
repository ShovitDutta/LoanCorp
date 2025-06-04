import { migrate } from "drizzle-orm/better-sqlite3/migrator";
import { db } from "../db";

async function main() {
  try {
    await migrate(db, { migrationsFolder: "./drizzle" });
    console.log("Migrations applied successfully!");
  } catch (error) {
    console.error("Error applying migrations:", error);
    process.exit(1);
  }
}

main();
