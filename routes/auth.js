


import express from "express"
import auth from "../controlllers/AuthController.js"

const router = express.Router()
router.get("/home", auth.registration)



export default router