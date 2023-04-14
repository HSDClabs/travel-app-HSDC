const express = require('express');
const locationRouter = express.Router();
const locationController = require('../controllers/locationController');

//YELP API
// /api/location, method: POST
locationRouter.post(
	'/:location',
	locationController.getCoffeeShops,
	locationController.getActivities,
	locationController.getParks,
	locationController.getRestaurants,
	locationController.getBars,
	locationController.getComedy,
	(req, res) => {
		res.status(200).json({
			coffeeInfo: res.locals.coffeeInfo,
			activityInfo: res.locals.activityInfo,
			parkInfo: res.locals.parkInfo,
			restaurantInfo: res.locals.restaurantInfo,
			barInfo: res.locals.barInfo,
			comedyInfo: res.locals.comedyInfo,
		});
	}
);

module.exports = locationRouter;