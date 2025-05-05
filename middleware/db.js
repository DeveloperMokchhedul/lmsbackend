import mongoose from "mongoose";


const mongodb =async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI, ()=>{
            console.log("MONGO DB CONNECTION SUCCESSFULLY");
            
        })
    } catch (error) {
        console.log("db connection failed");
        console.log(error);
        
        
        
    }
    

}