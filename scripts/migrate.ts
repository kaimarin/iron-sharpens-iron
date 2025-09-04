import "dotenv/config";
import { migrate } from "drizzle-orm/libsql/migrator";
import { client, db } from "../src/db/client";

async function main() {
  await migrate(db, { migrationsFolder: "./drizzle" });
  await client.close();
  console.log("Migrations applied");
}
main().catch(async (e) => {
  console.error(e);
  await client.close();
  process.exit(1);
});
