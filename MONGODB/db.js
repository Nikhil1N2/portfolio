const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://practice:practice@cluster0.60bwunz.mongodb.net/pagetest?retryWrites=true&w=majority'
        );

        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;