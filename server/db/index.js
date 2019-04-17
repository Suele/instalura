const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "instalura";

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

let collection;

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);

  if (!err) {
    const db = client.db(dbName);
    // eslint-disable-next-line no-console
    console.log(">>> MongoDB connected successfully");
    // eslint-disable-next-line no-console
    console.log(">>> database", db.databaseName);

    collection = db.collection("user");
  } else {
    // eslint-disable-next-line no-console
    console.log(">>> erro mongoDB:", err);
  }
});

module.exports = {
  register: (data, handler) => {
    collection.insertOne(data, (err, result) => {
      handler(err, result);
    });
  }
};
