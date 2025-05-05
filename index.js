import express from 'express'
import dotenv from 'dotenv';
import DBCONNECTION from './middleware/db.js';
import authRouter  from "./routes/auth.js"
import cookieParser from 'cookie-parser';
dotenv.config();
DBCONNECTION();




const app = express()
const PORT= process.env.PORT
app.use(express.json());
app.use(cookieParser())

app.use(express.urlencoded({ extended: true }));

app.use("/api",authRouter )




app.listen(3000,()=>{
    console.log(`server is running port ${PORT} `);
    
})