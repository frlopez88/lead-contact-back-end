import pgPromise from 'pg-promise';
import { config } from 'dotenv';

config();

const pgc = pgPromise();

export const db = pgc({
  connectionString: process.env.DB_URL,
  ssl: { rejectUnauthorized: false }
});

db.connect()
  .then(() => {
    console.log("Success Connection");
  })
  .catch((err) => {
    console.error(`Error Connection: ${err}`);
  });
