import mongoose, { Mongoose } from "mongoose";

declare global {
  namespace NodeJS {
    interface Global {
      mongoose: {
        conn: Mongoose | null;
        promise: Promise<Mongoose> | null;
      };
    }
  }
}

// Esto es necesario para evitar múltiples instancias en modo de desarrollo
const globalAny: any = global;

globalAny.mongoose = globalAny.mongoose || {
  conn: null,
  promise: null,
};

export async function mongoConnect(): Promise<Mongoose> {
  if (globalAny.mongoose.conn) {
    console.log("Connected from previous");
    return globalAny.mongoose.conn;
  } else {
    const conString = process.env.DATABASE_URL;

    if (!conString) {
      throw new Error("MongoDB connection string is not defined in environment variables");
    }

    const promise = mongoose.connect(conString, {
      autoIndex: true,
    }).then((mongoose) => {
      console.log("Newly connected");
      return mongoose;
    });

    globalAny.mongoose = {
      conn: await promise,
      promise,
    };

    return await promise;
  }
}

export const mongoDisconnect = (): void => {
  if (!globalAny.mongoose.conn) {
    return;
  }
  globalAny.mongoose.conn = null;
  mongoose.disconnect();
};
