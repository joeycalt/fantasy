const express = require('express');
const mongoose = require('mongoose');
const { application } = require('express');
const methodOverride = require('method-override');
require(`dotenv`).config();
require('./config/db.controller')



const mainController = require('./controllers/mainController')
// const auth_controller = require(`./controllers/auth_controller.js`);
// const user_controller = require(`./controllers/user_controller.js`);
// const { db } = require('./models/User');

// CONFIGS
const app = express();
const PORT = process.env.PORT || 4000
// app.use(session({
//     store: MongoStore.create({mongoUrl: process.env.MONGODB_URI }),
//     secret: "beans",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         maxAge: 604800000 //1 week
//     },
    
// }))


app.set('view engine', 'ejs')


//MIDDLEWEAR
app.use(methodOverride('_method'));
app.use('/public', express.static('public'))

// app.use(function (req, res, next) {
//     res.locals.user = req.session.currentUser;
//     next();
//   });

// const authRequired = function (req, res, next){
//     if (req.session.currentUser){
//         return next();
//     }
//     return res.redirect('/auth/login')
// };

// CONTROLLER ROUTING
app.use('/', mainController)
// app.use('/comments', authRequired, commentController);
// app.use('/auth', auth_controller);
// app.use('/user', user_controller);

// 
app.listen(PORT,() => console.log(`Listening on port: ${PORT}`));