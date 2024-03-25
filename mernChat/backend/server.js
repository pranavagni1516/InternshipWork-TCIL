import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDb from "./db/connectToMongoDB.js";

import {app,server} from "./socket/socket.js"

dotenv.config();
const PORT = process.env.PORT || 5000
// const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);


// app.get("/",(req,res)=>{
//     res.send("server is ready on port");
// });


server.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`server running at port ${PORT}`)
}
);