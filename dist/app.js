import express from "express";
import pkg from "pg";
var Pool = pkg.Pool;
var connection = new Pool({
    host: "localhost",
    port: "5432",
    user: "postgres",
    password: "1234",
    database: "sternstore"
});
var app = express();
app.listen(4003, function () {
    console.log("listening on port 4003");
});
