import mongoose from "mongoose";


const DBCONNECTION =async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("db connection successfully");
        
    } catch (error) {
        console.log("db connection failed");
        console.log(error);
        
    }
    

}
export default DBCONNECTION