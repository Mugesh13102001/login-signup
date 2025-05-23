const { signup, login } = require('../controllers/AuthController');
const { signupValidation , loginValidation } = require('../Middlewares/AuthValidation');

const Router= require('express').Router();


Router.post('/login',loginValidation,login);


Router.post('/signup',signupValidation,signup);

module.exports= Router;