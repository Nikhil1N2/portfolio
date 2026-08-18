import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import authRouter from './routes/authRoutes.js';

const PORT = 4000;
const app = express();

//Middlewares
app.use(cors());
app.use(express.json({limit:"1mb"}));


//DB
connectDB();

//Routes
app.use("/api/auth",authRouter);

app.get('/',(req,res) => {
    res.send("API WORKING");
});

app.listen(PORT, () => {
    console.log(`Server on http://localhost:${PORT}`);
})