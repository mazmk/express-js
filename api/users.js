const app = require("express").Router();

app.get('/', (req, res) => {
    res.json({
        api: "/users",
        status: 200
    });
})

module.exports = app;