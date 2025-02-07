//gah7omMhOUmA5EiP
const { MongoClient } = require('mongodb');

const URL = "mongodb+srv://ravinamohite07:gah7omMhOUmA5EiP@namstenode.budiy.mongodb.net/";

const client = new MongoClient(URL);

const dbName = "Helloworld"

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('user');

    const data = {
        firstname: "Ranveer",
        lastname: "Singh",
        city: "Mumbai",
    }

    //insert
   // const insertResult = await collection.insertMany([data]);
    //console.log('Inserted documents =>', insertResult);
  
    //read
    //const findResult = await collection.find({}).toArray();
    //console.log('Found documents =>', findResult);

    //const countResult = await collection.countDocuments({});
    //console.log("Count of documents in the User collection =>", countResult);

    // Find all documents with a filter of firstname: Deepika

   const result = await collection.find({ firstname: "Ranveer" }).toArray();
   console.log("result => ", result);
  
    return 'done.';
  }

  main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
