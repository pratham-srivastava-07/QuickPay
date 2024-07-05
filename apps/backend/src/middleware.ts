import { JWT_SECRET } from "./config";

import jwt, { JwtPayload } from "jsonwebtoken"

export default function authMiddleware(req: any, res: any, next: any) {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(403).json({})
    }
    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload
        req.userId = decoded.userId
        next()
    } catch(err) {
        res.status(403).json({error: err})
    }
}