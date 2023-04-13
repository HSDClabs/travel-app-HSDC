const locationController = {};

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer OmgJFQk8VBZfv0zC6St4qG5X1zfA694YbdWZlvFmF09GAU9vSgR56VG0g7FpjJf2XHGqO6kfeypyDcrKMkLMo_CzP4ED7v9XXodQazsa_YYnXIpy-kRkjs9z-DE0ZHYx',
	},
};

// GET RESTAURANT INFO FROM API
locationController.getRestaurants = async function (req, res, next) {
	try {
		const { location } = req.params;
		const response = await fetch(
			`https://api.yelp.com/v3/businesses/search?location=${location}&term=resturants&sort_by=best_match&limit=10`,
			options
		);
		const data = await response.json();
		// map new array of objects containing pertinent data
		const locationInfo = data.businesses.map((obj) => {
			return {
				name: obj.name,
				image: obj.image_url,
				review_count: obj.review_count,
				rating: obj.rating,
				address: obj.location.display_address[0],
				price: obj.price,
			};
		});
		res.locals.restaurantInfo = locationInfo;
		return next();
	} catch (err) {
		return next({
			log: 'Middleware error at locationController.getRestaurants',
			message: 'Error fetching API data',
    	});
	}
};

// GET COFFEE SHOP INFO FROM API
locationController.getCoffeeShops = async function (req, res, next) {
	try {
		const { location } = req.params;
		const response = await fetch(
			`https://api.yelp.com/v3/businesses/search?location=${location}&term=coffee&sort_by=best_match&limit=10`,
			options
		);
		const data = await response.json();
		// map new array of objects containing pertinent data
		const locationInfo = data.businesses.map((obj) => {
			return {
				name: obj.name,
				image: obj.image_url,
				review_count: obj.review_count,
				rating: obj.rating,
				address: obj.location.display_address[0],
				price: obj.price,
			};
		});
		res.locals.coffeeInfo = locationInfo;
		return next();
	} catch (err) {
		return next({
			log: 'Middleware error at locationController.getCoffeeShops',
			message: 'Error fetching API data',
    	});
	}
};

// GET ACTIVITY INFO FROM API
locationController.getActivities = async function (req, res, next) {
	try {
		const { location } = req.params;
		const response = await fetch(
			`https://api.yelp.com/v3/businesses/search?location=${location}&term=activity&sort_by=best_match&limit=10`,
			options
		);
		const data = await response.json();
		// map new array of objects containing pertinent data
		const locationInfo = data.businesses.map((obj) => {
			return {
				name: obj.name,
				image: obj.image_url,
				review_count: obj.review_count,
				rating: obj.rating,
				address: obj.location.display_address[0],
				price: obj.price,
			};
		});
		res.locals.activityInfo = locationInfo;
		return next();
	} catch (err) {
		return next({
			log: 'Middleware error at locationController.getActivities',
			message: 'Error fetching API data',
    	});
	}
};

// GET PARK INFO FROM API
locationController.getParks = async function (req, res, next) {
	try {
		const { location } = req.params;
		const response = await fetch(
			`https://api.yelp.com/v3/businesses/search?location=${location}&term=park&sort_by=best_match&limit=10`,
			options
		);
		const data = await response.json();
		// map new array of objects containing pertinent data
		const locationInfo = data.businesses.map((obj) => {
			return {
				name: obj.name,
				image: obj.image_url,
				review_count: obj.review_count,
				rating: obj.rating,
				address: obj.location.display_address[0],
				price: obj.price,
			};
		});
		res.locals.parkInfo = locationInfo;
		return next();
	} catch (err) {
		return next({
			log: 'Middleware error at locationController.getParks',
			message: 'Error fetching API data',
    	});
	}
};

// GET BAR INFO FROM API
locationController.getBars = async function (req, res, next) {
	try {
		const { location } = req.params;
		const response = await fetch(
			`https://api.yelp.com/v3/businesses/search?location=${location}&term=bar&sort_by=best_match&limit=10`,
			options
		);
		const data = await response.json();
		// map new array of objects containing pertinent data
		const locationInfo = data.businesses.map((obj) => {
			return {
				name: obj.name,
				image: obj.image_url,
				review_count: obj.review_count,
				rating: obj.rating,
				address: obj.location.display_address[0],
				price: obj.price,
			};
		});
		res.locals.barInfo = locationInfo;
		return next();
	} catch (err) {
		return next({
			log: 'Middleware error at locationController.getBars',
			message: 'Error fetching API data',
    	});
	}
};

// GET COMEDY INFO FROM API
locationController.getComedy = async function (req, res, next) {
	try {
		const { location } = req.params;
		const response = await fetch(
			`https://api.yelp.com/v3/businesses/search?location=${location}&term=comedy&sort_by=best_match&limit=10`,
			options
		);
		const data = await response.json();
		// map new array of objects containing pertinent data
		const locationInfo = data.businesses.map((obj) => {
			return {
				name: obj.name,
				image: obj.image_url,
				review_count: obj.review_count,
				rating: obj.rating,
				address: obj.location.display_address[0],
				price: obj.price,
			};
		});
		res.locals.comedyInfo = locationInfo;
		return next();
	} catch (err) {
		return next({
			log: 'Middleware error at locationController.getComedy',
			message: 'Error fetching API data',
    	});
	}
};

module.exports = locationController;
