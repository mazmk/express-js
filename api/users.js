const app = require("express").Router();
const url = require("./urls").url;
const { MongoClient } = require("mongodb");
const client = new MongoClient(url);

async function getAll(dbName, colectionName) {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(colectionName);
    const findResult = await collection.find({}).toArray();
    return findResult;
  } catch (e) {
    throw e;
  } finally {
    console.log('done querying..................');
    client.close();
  }
}

async function createUser(dbName, colectionName, data) {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(colectionName);
    const findResult = await collection.insertMany(data);
    return findResult;
  } catch (e) {
    throw e;
  } finally {
    console.log('done querying..................');
    client.close();
  }
}

app.get("/", (req, res) => {
  getAll("posts", "users")
    .then((val) => res.json(val))
    .catch((err) => res.json(err));
});

app.post("/", (req, res) => {
  try {
    const data = req.body.value;
    console.log("data", data);
    createUser("posts", "users", data)
      .then((val) => res.json(val))
      .catch((err) => res.send(err.message));
  } catch (errorHeHe) {
    res.json(errorHeHe);
  }

  //   res.json({ val: "hehe" });skdfjfdjlj
});

module.exports = app;
