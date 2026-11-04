import express from "express";
import cors from "cors";
import 'dotenv/config';
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
//jangan di hapus buat user authentication
import userRouter from "./routes/userRoute.js"
//- rocki


// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

//api endpooints
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)

app.get("/", (req, res) => {
    res.send("API Working")
})

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`)
})
