import express from 'express'
import dotenv from 'dotenv';
import DBCONNECTION from './middleware/db.js';
import authRouter  from "./routes/auth.js"
dotenv.config();




const app = express()
const PORT= process.env.PORT
DBCONNECTION();

app.use("/api",authRouter )




app.listen(3000,()=>{
    console.log(`server is running port ${PORT} `);
    
})