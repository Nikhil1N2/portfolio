const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('/routes/auth');

require("dotenv").config();
const app = express();
app.use(cors());
//Routes
app.use('/api/auth',authRoutes);
//connect to mongodb
console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI)
    

.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:',error);
})

const port = process.env.port||5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});