const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

// MONGODB PATH
mongoURI = process.env.MONGODB_URI 
// ^ HERE ^

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected`)
})
mongoose.connection.on(`error`, () => {
    console.log(`MongoDB connection error`)
})
mongoose.connection.on(`disconnected`, () => {
    console.log(`MongoDB disconnected`)
})

