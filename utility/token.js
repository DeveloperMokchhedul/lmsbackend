

import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

export const encodedToken =async (id,email)=>{ 
    let EXPIRE={expiresIn: '24h'}
    const KEY = "mokchhedul"
    const payload = {id,email}
    return await jwt.sign(payload, KEY,  EXPIRE);
    
}

export const hashedPassword = async (password) => {
    
    return await bcrypt.hash(password, 10); 
}

export const isMatchPassword = async (userpassword,dbpassword) => {
    
    return await bcrypt.compareSync(userpassword, dbpassword); 
}


