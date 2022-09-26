const mongoose = require('mongoose');
require('dotenv').config();

// MONGODB PATH
mongoURI = process.env.MONGODB_URI 
// ^ HERE ^

mongoose.connect("mongodb+srv://joeycalt:joeycalt@mongotest.uibch1m.mongodb.net/?retryWrites=true&w=majority");

mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected`)
})
mongoose.connection.on(`error`, () => {
    console.log(`MongoDB connection error`)
})
mongoose.connection.on(`disconnected`, () => {
    console.log(`MongoDB disconnected`)
})

