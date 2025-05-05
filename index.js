import express from 'express'
import dotenv from 'dotenv';
import DBCONNECTION from './middleware/db.js';
dotenv.config();

const PORT= process.env.PORT
DBCONNECTION();

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000,()=>{
    console.log(`server is running port ${PORT} `);
    
})