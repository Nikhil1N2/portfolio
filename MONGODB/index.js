const express = require('express');
const connectDB = require('./db');

const app = express();

connectDB();
app.get('/',(req,res) => res.send('API Running'));
app.use('/item',require('./item'))//for request
app.listen(2000, () => {
    console.log('Server running on port 2000');
});