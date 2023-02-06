import express from "express";
import cors from "cors";
import Routes from "./ routes/index.js";

const app = express();

app
    .use(cors())
    .use(express.json())
    .use(Routes);

app.listen(4003, ()=>{
    console.log("listening on port 4003");
});