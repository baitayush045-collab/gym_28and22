const mongoose = require("mongoose");

const connectDB = async () =>{
    try {
        const mongoUrl = process.env.MONGO_URL || 'PORT';
        await mongoose.connect(mongoUrl);
        console.log('MongoDB connected successfuly');
    } catch (err) {
        console.error('MongoDB conection failed:', err.message);
    }

};
module.exports = connectDB;