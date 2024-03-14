import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDb from "./db/connectToMongoDB.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json());
app.use("/api/auth",authRoutes);


// app.get("/",(req,res)=>{
//     res.send("server is ready on port");
// });


app.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`server running at port ${PORT}`)
}
);