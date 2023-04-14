const express = require('express');
require("dotenv").config();
const app = express();
const PORT = process.env.SERVER_PORT;

const userRouter = require('./routes/userRouter');
const locationRouter = require('./routes/locationRouter');

// Parse all incoming requests for json and url encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route handlers: Login, Signup, and Location paths
app.use('/api/user', userRouter);
app.use('/api/location', locationRouter);

// Handles requests to unknown routes
app.use((req, res) => res.status(404).send(`The page you requested could not be found. Please check the URL for any errors and try again.`));

// Global error handler
app.use((err, req, res, next) => {
	const defaultErr = {
		log: 'Express error handler caught unknown middleware error',
		status: 500,
		message: { err: 'An error occurred' },
	};
	const errorObj = Object.assign({}, defaultErr, err);
	console.log(errorObj.log);
	return res.status(errorObj.status).json(errorObj.message);
});

// Once connection to server is established, log successful connection
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
