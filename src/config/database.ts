import pg from "pg";

const { Pool } = pg;
const connectionString = "postgresql://postgres:root@localhost:5434/dbtest";

export const pool = new Pool({
  connectionString,
  allowExitOnIdle: true,
});
