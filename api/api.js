const app = require("express").Router();

const postsRoute = require("./posts");
const usersRoute = require("./users");

app.use('/posts', postsRoute);
app.use('/users', usersRoute);

module.exports = app;