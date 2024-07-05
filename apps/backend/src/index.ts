import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import  {router}  from "./routes"
// import authMiddleware from "./middleware"
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(express.json());
// app.use(authMiddleware)
app.use("/api/v1", router)

app.get("/", (req, res)=> {
    res.send("Hello");
})


app.listen(3000, ()=> {
    console.log("Server started");
    
})