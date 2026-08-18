import mongoose from "mongoose";

export const connectDB = async () => {
    mongoose.connect("mongodb+srv://NikhilAI:NikhilAI@cluster0.60bwunz.mongodb.net/?appName=Cluster0/AI")
    .then(() => {
        console.log("DB CONNECTED");
    });
};