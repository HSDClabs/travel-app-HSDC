import React from 'react';
/* 
To Do: 
    - turn nav bar into actual bar
    - add logout button
    - add home button?
    - lots of styling on main app pages
*/
const NavBar = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    const location = e.target[0].value;
    // makes a post request to api/location with route parameter location converted to JSON
    fetch(`/api/location/${location}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ location }),
    })
      .then((response) => {
        // returns the results of the backend call to locationController.getEvents
        // and locationController.getRestaurants in JSON format (then parsed)
        return response.json();
      })
      .then((json) => {
        // save the returned data of restaurants and events extracted in the previous .then
        // into the props which can be passed down to restaurant and event containers
        // to have their properties read into the cards.
        return props.changeLocation(json)
      });
    }

  return (
    // nav bar, with logout button and location query
    <nav>
      <h3>{props.username}</h3>
      {/* on form submission, ingests the location from the location textbox on the page */}
      <form onSubmit={handleSubmit}>
      {/* input field and button to be placed on nav-bar for searching various locations */}
      <input type="text" placeholder="Enter Location!"></input>
      <button type="submit">Submit Location</button>
      </form>
    </nav>
  );
};

export default NavBar;
