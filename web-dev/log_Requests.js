//Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console


const express = require("express");

const app = express();

function logg(req, res, next) {
    const timestamp = new Date().toISOString();
    console.log(req.path + " " + req.method + " " + timestamp);
    next();
}

app.use(logg);

app.get("/sum", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a - b
    })
});

app.listen(3000);
