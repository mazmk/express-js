const app = require("express").Router();

const postsRoute = require("./posts");
const usersRoute = require("./users");

app.use(loggg);
app.use("/posts", postsRoute);
app.use("/users", usersRoute);



function loggg(req, res, next) {
  console.log(`Type: "${req.method}", URL: "${req.originalUrl}"`);
  next();//sdfsdssdd
}
app.get("/hehe", function (req, res, next) {
  console.log(`Type: ${req.method} ${req.originalUrl}`);
  next();
});
module.exports = app;
