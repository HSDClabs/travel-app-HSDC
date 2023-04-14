import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';
import CardContainer from './card-container';
import NavBar from './nav-bar';


const UserPage = (props) => {
    
    // pass the notes info to the notes component.
    // also say hello {user}
    // perhaps have a location and set location, also a function that sets location? pass into nav bar.
    // location is an object with 2 arrays: restaurantInfo and eventInfo

    // location state hook
    const [location, setLocation] = useState({})
    const changeLocation = (newLocation) => { setLocation(newLocation)}

    // setting the path for use on index.js to user page
    const user = useLocation();


    return (
        <div className="user-page">
            <header>
                <NavBar changeLocation={changeLocation} username={user.state.username}/>
            </header>
            {/* Prop drilling the location through to the card container */}
            <CardContainer location={location} />
        </div>
    );
};

export default UserPage;
