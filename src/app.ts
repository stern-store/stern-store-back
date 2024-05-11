import express from "express";
import cors from "cors";
import Routes from "./ routes/index.js";
import dotenv from "dotenv";


const app = express();
dotenv.config();

app
    .use(cors())
    .use(express.json())
    .use(Routes);

app.listen(process.env.POSTGRES_PORT, ()=>{
    console.log(`listening on port ${process.env.POSTGRES_PORT}`);
});