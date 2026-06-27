const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/testDB")
.then(() => console.log("Connected to DB"))
.catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
})

const User = mongoose.model("User", userSchema);