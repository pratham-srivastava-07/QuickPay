import express from "express"
const userRouter = require("./user")
const accountRouter = require('./account')
// import { accountRouter } from "./account"
// export const router = express.Router()
 export  const router = express.Router()
router.use("/user", userRouter)
router.use("/account", accountRouter)




