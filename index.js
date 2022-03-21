const express = require("express");
const app = express();
const apiRoute = require("./api/api");
const portNum = 3000;

app.use(express.json());
app.use('/api', apiRoute);

app.use(express.static("adward"));


function loggerHueHue(req, res, next) {
    console.log(req.originalUrl);
}

app.listen(portNum, () => {
    console.log(`Server is listening on http://localhost:${portNum}`);
})