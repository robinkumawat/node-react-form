// import {MongoClient} from "mongodb"

// const url = "mongodb://127.0.0.1:27017"
// const dbname = "users"

// const connection = MongoClient.connect(url)

// export default connection




import { MongoClient } from "mongodb";
const url = "mongodb://localhost:27017";
const dbName = "students";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
let db;

// const collection = db.collection(dbName)
// Connect to the MongoDB server
async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    // Use the database
    db = client.db(dbName);
    // console.log(db);
    // Perform database operations here

    // Close the client when done
    client.close();
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

// Call the connectToMongoDB function to establish the connection
// connectToMongoDB();
export const dbase = db;
export default connectToMongoDB