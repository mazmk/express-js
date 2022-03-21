const app = require("express").Router();
const url = require("./urls");



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
  
  async function createPost(dbName, colectionName, data) {
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

  class Post {
      constructor(_name, _time, _data, _desc){
          this.name = _name;
          this.time = _time;
          this.data = _data;
          this.desc = _desc;
      }
  }


app.get('/', (req, res) => {
    const fu = new Post("Mazm", "10:45", "hehe", "desc");
    console.log(JSON.parse(JSON.stringify(fu)))
    res.json({
        api: "/posts",
        status: 200
    });
}).post('/', (req, res) => {
    console.log('body',req.body);
    res.sendStatus(201);
})

module.exports = app;