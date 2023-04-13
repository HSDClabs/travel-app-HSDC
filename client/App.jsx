import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './components/landing-page/Login.jsx'
import './stylesheets/styles.scss'

const App = (props) => {
  const [user, setUser] = useState({});
  // passing setUser into function in order to pass down to Login?  Not sure if necessary? 
  const updateUser = (currentUser) => {
    setUser(currentUser);
  };

  // Returning the homepage with login / signup functionality
  return (
    <div id="login-page">
      <Login updateUser={setUser} />
    </div>
  );
};

export default App;
