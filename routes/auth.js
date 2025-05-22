

import express from "express"
import auth from "../controlllers/AuthController.js"
import { authverification } from "../middleware/authentication.js"

const router = express.Router()
router.post("/user/registration", auth.registration)
router.post("/user/login", auth.login)
router.post("/user/logout", authverification , auth.logOut)
router.get("/user/profile", authverification , auth.userProfile)
router.put("/user/update", authverification , auth.profileUpdate)




export default router