import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {

  // function to navigate to user page on call.  Passing newState to that page as the state?
  const navigate = useNavigate()
  function redirectToUserPage(newState) {
    navigate('/user', { state: newState });
  }

  // returning a form which on submit ingests the user name and password provided
  // and calls a POST request to the backend containing both, which will return a bool
  // bool is evaluated to determine if login was successful (UN and PW match).
  return (
    <div id='login-wrapper'>
      <h1 id='main-welcome-title'>Hello</h1>
      <h3>Please login</h3>
      <form id="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          const username = e.target[0].value;
          const password = e.target[1].value;
          // console.log(username, password);
          fetch('/api/user/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              password: password,
            }),
          }).then((res) => {
            return res.json();
          }).then((json) => {
            if (json === false) {
              window.alert('Username and/or Password is not valid');
              console.log('login failed');
            } else {
              // we will get an obj with username and password, v, _id, notes
              console.log("json: ", json);
              console.log("this is Props in login.js: ", props);
              window.alert('Successful login!');
              redirectToUserPage(json);
            }
          }).catch(
            console.log('Error occurred, try again')
          );
        }
        }>
        {/* login and password textboxes and buttons */}
        <input type="text" placeholder="Username" required/>
        <input type="password" placeholder="Password" required/>
        <button type="submit">Login</button>
        <h4>OR</h4>
        <Link id='main-sign-up' to='/signup'>
          <button type="button">Sign Up</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
