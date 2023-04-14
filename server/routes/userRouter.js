const express = require('express');
const userRouter = express.Router();
const userController = require('../controllers/userController');

//User Login Route
userRouter.post('/login', userController.verifyUser, (req, res) => {
	console.log('login working');
	res.status(200).json(res.locals.user);
});

//User Sign-Up Route
userRouter.post('/signup', userController.createUser, (req, res) => {
	console.log('signup working');
	res.status(200).json(res.locals.user);
});

module.exports = userRouter;