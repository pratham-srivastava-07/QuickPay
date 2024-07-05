import express, { Router } from  "express"
import authMiddleware from "../middleware";
import { Account } from "../db";;
import mongoose from "mongoose";

export const accountRouter = express.Router();

accountRouter.use(authMiddleware)

accountRouter.get("/balance",authMiddleware, async(req, res)=> {
    const account = await Account.findOne({
        userId: req.userId 
    })

    res.status(200).json({
        balance:  account?.balance
    })
})


accountRouter.post('/transfer',authMiddleware, async (req, res)=> {
    const session = await mongoose.startSession();
    session.startTransaction();
    const {to, amount} =  req.body;
    const account = await Account.findOne({userId: req.userId}).session(session)

    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();
    res.json({
        message: "Transfer successful"
    });
});

module.exports = accountRouter;

