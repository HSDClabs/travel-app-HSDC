const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require('../models/userModel');


const userController = {};

userController.createUser = async function (req, res, next) {
	const { username, password } = req.body;
	try {
		// query database with username
		const user = await User.findOne({ username: username })
		if (user) {
		  res.locals.user = false;
		  return next();
		} else {
			// if username does not exist in DB, create a new user doc with hashed password
			const hashedPassword = await bcrypt.hash(password, saltRounds)
			const newUser = await User.create({ username: username, password: hashedPassword})
			console.log('Created user:', newUser);
			// send back created user
			res.locals.user = newUser;
			return next();
			};
		} catch (error) {
    return next({
      log: 'Middleware error at userController.createUser',
      message: 'Error querying database',
    });
  }
};

userController.verifyUser = async function (req, res, next) {
	const { username, password } = req.body;
	if (!username || !password){
		return next({
			log: `Server could not complete request error, invalid login`,
			message: 'Error querying database for username',
		});
	}
	//query database for user
	try {
		//query database for user
		const user = await User.findOne({ username: username })	
			console.log('user:', user);
			if (!user) {
				res.locals.user = false;
				console.log('user not found')
				return next();
			} 
			// username exists, compare password
			const passwordMatch = await bcrypt.compare(password, user.password)
			if (passwordMatch) {
				res.locals.user = user;
				return next();
			} else {
			res.locals.user = false;
			return next();
			}
	} catch (error) {
		return next({
			log: `Middleware error at userController.verifyUser`,
			message: 'Error verifying that user is stored in the database.',
		});
	}
};

module.exports = userController;
