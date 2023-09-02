import express from "express";
import mongoose from "mongoose";
import 'dotenv/config';
import cors from "cors";
import userRouter from "./routes/userRoutes.js";
import taskRouter from "./routes/taskRoutes.js";
const app = express();
app.use(cors());
mongoose.connect(process.env.MONGO_URL)
.then(()=>app.listen(process.env.PORT,()=>console.log(`Server started @ port : ${process.env.PORT}`)));
app.use(express.json());
app.use("/",userRouter);
app.use("/tasks",taskRouter);


