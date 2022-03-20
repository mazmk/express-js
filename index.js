const express = require("express");
const app = express();
const apiRoute = require("./api/api");
app.use('/api', apiRoute);

app.use(express.static("adward"));


function loggerHueHue(req, res, next) {
    console.log(req.originalUrl);
}

app.listen(3000, () => {
    console.log("Server is listening on http://localhost:3000");
})