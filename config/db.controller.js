const mongoose = require('mongoose');
require('dotenv').config();

// MONGODB PATH
mongoURI = process.env.MONGODB_URI 
// ^ HERE ^

mongoose.set('strictQuery', false);

mongoose.connect('process.env.MONGODB_URI' || 4000);

mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected`)
})
mongoose.connection.on(`error`, () => {
    console.log(`MongoDB connection error`)
})
mongoose.connection.on(`disconnected`, () => {
    console.log(`MongoDB disconnected`)
})

