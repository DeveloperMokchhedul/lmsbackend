import User from "../models/authModel.js";
import hashedPassword from "../utility/token.js"

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








// Export as default object
export default { registration };
