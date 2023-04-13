import React from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {

  //function to navigate to user dashboard after login and pass the username and notes state to that page.
  const navigate = useNavigate()
  function redirectToUserPage(newState) {
    navigate('/user', { state: { username: newState.username, notes: newState.notes } })
  }

  // returning a form which on submit ingests the user name and password provided
  // and calls a POST request to the backend containing both, which will return a bool
  // bool is evaluated to determine if signup was successful (username is unique).
  return (
    <div id="signup-page">
      <form id="signup-form"
        onSubmit={(e) => {
          e.preventDefault();
          const username = e.target[0].value;
          const password = e.target[1].value;
          fetch('/api/user/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          })
            .then((res) => res.json())
            .then((json) => {
              if (json === false) {
                window.alert("Username already exists");
                console.log("Username already exists");
              } else {
                window.alert("Congratulations! You have successfully made an account");
                redirectToUserPage(json);
              }
            });
        }
        }>
        {/* signup textboxes and buttons rendered */}
          <h4>Please input a unique username and password.</h4>
          <input type="text" placeholder="New Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
