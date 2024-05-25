import { MongoClient } from "mongodb";

export async function getMongoDb() {
  const client = new MongoClient(process.env.DATABASE_URL!);
  await client.connect();
  const db = client.db("Cluster0");
  return db;
}
