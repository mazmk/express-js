const app = require("express").Router();

app.get('/', (req, res) => {
    res.json({
        api: "/posts",
        status: 200
    });
})

module.exports = app;