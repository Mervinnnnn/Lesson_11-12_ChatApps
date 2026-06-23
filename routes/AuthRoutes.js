import express from 'express'
const router = express.Router()

import { loginPage, registerPage, registerUser, loginUser, logOutUser, chatPage} from '../controllers/AuthController.js'


router.get("/register", registerPage)
router.get("/login", loginPage)
router.post('/login', loginUser)
router.post('/register', registerUser)
router.get('/logout', logOutUser)


export default router