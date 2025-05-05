

// import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

// const encodedToken =async (email)=>{ 
//     let EXPIRE={expiresIn: '24h'}
//     const KEY = "mokchhedul"
//     const payload = {email}
//     return await jwt.sign(payload, KEY,  EXPIRE);
    
// }

const hashedPassword = async (password) => {
    
    return await bcrypt.hash(password, 10); 
}


export default hashedPassword 
