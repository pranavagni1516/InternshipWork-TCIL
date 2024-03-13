import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDb from "./db/connectToMongoDB.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use("/api/auth",authRoutes);

const PORT = process.env.PORT || 5000

app.get("/",(req,res)=>{
    res.send("server is ready on port");
});


app.listen(PORT,()=>{
    connectToMongoDb();
    console.log(`server running at port ${PORT}`)
}
);