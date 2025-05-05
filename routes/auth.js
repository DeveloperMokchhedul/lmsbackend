


import express from "express"
import auth from "../controlllers/AuthController.js"

const router = express.Router()
router.post("/user/registration", auth.registration)




export default router