import User from "../models/authModel.js";
import {hashedPassword, isMatchPassword, encodedToken} from "../utility/token.js"



const registration = async(req, res) => {
    try {

        const {fname, lname,email,password} = req.body;
        
        if (!email || !password) {
            return res.status(400).json({
                message:"email and password required"
            })
        }
        const hash = await hashedPassword(password);

        const createdUser = await User.create({
            fname,
            lname,
            email,
            password:hash
        })

        return res.status(200).json({
            success:true,
            message:"user creation successfully",
        })
        
    } catch (error) {
        console.log("user creation fail");
        return res.status(400).json({
            success:false,
            message:"user creation fail"
        })
    }

};


const login = async(req, res)=>{
    try {
        const {email, password}=req.body;
    
        const registaredUser = await User.findOne({email})
        if (!registaredUser) {
            return res.status(400).json({
                success:false,
                message:"user not exists"
            })
        }


       const isMatch = await isMatchPassword(password, registaredUser.password)
       
       if (!isMatch) {
        return res.status(400).json({
            success: false,
            message: "email or password wrong"
        })
        
       }

       console.log("user data is ", registaredUser._id, registaredUser.email);
       

       const token =await encodedToken(registaredUser._id, registaredUser.email)
       console.log("token is", token);
       

        return res.status(200).cookie("token",token, {httpOnly:true}).json({
            success:true,
            message:"user login successfully"
        })
        
    } catch (error) {
        console.log(error);
        
        return res.status(400).json({
            success:false,
            message:"user login failed"

        })

        
    }
}







// Export as default object
export default { registration, login };
