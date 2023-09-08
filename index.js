import express from "express";
import conf from "./database/db.js";
import Router from "./routes/api.js";


const app = express();
const port = 7000;

app.use(express.json());


conf();
app.use(Router)



app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})