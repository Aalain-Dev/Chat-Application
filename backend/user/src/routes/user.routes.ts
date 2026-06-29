import express from "express"
import { login, VerifyOtp } from "../controllers/user.js";
 
const router = express.Router()

router.post("/login",login)
router.post("/verify",VerifyOtp)

export default router;