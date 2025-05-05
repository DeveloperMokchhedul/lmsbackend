import mongoose, { Schema } from "mongoose";

const userSchema = mongoose.Schema({
    fname:{
        type:String,
        
    },
    lname:{
        type:String,
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ["student", "teacher"],
        default: "student"
    },
    enrolledCourse:[
        {
            type: mongoose.Types.ObjectId,
            ref:"course"
        }
    ],
    photo :{
        type: String
    }


},{timestamps: true})

const User = mongoose.model("User", userSchema)
export default User;