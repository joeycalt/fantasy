const express = require('express');
const mongoose = require('mongoose');
const { application } = require('express');
const methodOverride = require('method-override');
require(`dotenv`).config();
require('./config/db.controller')



const mainController = require('./config/controllers/mainController')
// const auth_controller = require(`./controllers/auth_controller.js`);
// const user_controller = require(`./controllers/user_controller.js`);
// const { db } = require('./models/User');

// CONFIGS
const app = express();
const PORT = process.env.PORT || 4000

app.set('view engine', 'ejs')


//MIDDLEWEAR
app.use(methodOverride('_method'));
app.use('/public', express.static('public'))

// CONTROLLER ROUTING
app.use('/', mainController)

// 
app.listen(process.env.PORT || 4000);