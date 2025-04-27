const ensureAuthenticated = require('../Middlewares/Auth');



const Router= require('express').Router();


Router.get('/', ensureAuthenticated, (req,res) => {
    console.log("-------logged in the user info -------",req.user);
    res.status(200).json([
        {
            name:"mobile",
            price:10000
        },
        {
            name:"toy car",
            price:20000
        }
    ])
});


module.exports= Router;