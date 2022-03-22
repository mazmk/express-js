const app = require("express").Router();
const url = require("./urls").url;
const { MongoClient } = require("mongodb");
const client = new MongoClient(url);
const { check, validationResult } = require('express-validator');

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
    console.log("done querying..................");
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
    console.log("done querying..................");
    client.close();
  }
}

app.get("/", (req, res) => {
  getAll("mazm", "users")
    .then((val) => res.json(val))
    .catch((err) => res.json(err));
});

app.post(
  "/",
  check('value').isArray(),
  
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const data = req.body.value;
      console.log("data", data);
      createUser("mazm", "users", data)
        .then((val) => {
          res.status(201).send(val);
        })
        .catch((err) => res.status(400).send(err.message));
    } catch (errorHeHe) {
      res.status(400).send(errorHeHe);
    }
  }
);

module.exports = app;
