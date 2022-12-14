const { Router, query } = require('express');
const express = require('express');
const router = express.Router();
const Post = require('./../../model/Post')
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
const bodyParser = require('body-parser');
const req = require('express/lib/request');
router.use( bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
// const mongoose = require('mongoose');
// let myId = mongoose.Types.ObjectId()
const path = require('path')

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname));
    
});


// home
router.get('/', (req,res) => {
    res.render('home.ejs')
})

// teams
router.get('/teams', (req,res) => {
    res.render('teams.ejs')
})

// new comment
router.get("/FFFFOTW/new", async (req, res) => {
	res.render('new.ejs')
	})

    //CREATE ROUTE
    router.post('/FFFFOTW', async (req, res, next) => {
        try {
            const createdPost = await Post.create ({content: req.body.content, week: req.body.week})
            
            res.redirect(`/FFFFOTW/${createdPost.id}`)
        }catch(error) {
            console.log(error);
            return next()
        }
    })
    
    router.get('/FFFFOTW/:id', async (req,res,next) => {
        try {
            const facts = await Post.findById(req.params.id)
            res.render('show-ffTwo.ejs', {thisFacts: facts})
        }catch (err){
            console.log(err);
            req.error= err;
            return next()
        }
    })
    router.get('/FFFFOTW/', async (req,res, next) => {
        try {
            const factsTwo = await Post.find({})
            let context = { 
                    theFacts: factsTwo
                    }
        res.render('show-ff.ejs', context)
        } catch (err){
                console.log(err);
                req.error= err;
                return next();
        }
    })
    

module.exports = router