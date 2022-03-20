const express = require("express");
const app = express();
const router = express.Router();
const fs = require("fs");
const path = require("path");
app.set("view engine", "ejs");


app.get('/', (req, res, next) => {
    // console.log(path(req.url));
    console.log('baseUrl is: ',req.url);
    // let dd = fs.readFileSync('./../')
    res.download('mazm.zip');
    // console.log('Request: ', req.xhr);
    // res.render("home");
});

// app.

app.listen(3000, ()=>{
    console.log("Server is listening on http://localhost:3000")
})