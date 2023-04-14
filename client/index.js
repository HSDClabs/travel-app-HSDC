import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import App from './App.jsx';
import SignUp from './components/landing-page/SignUp.jsx';
import Login from './components/landing-page/Login.jsx';
import UserPage from './components/user/user-page.jsx';


//defines routes to various pages
const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/login', element: <Login /> },
	{ path: '/signup', element: <SignUp /> },
	{ path: '/user', element: <UserPage /> },
]);

//create root element
const root = ReactDOM.createRoot(document.getElementById('root'));

//render app page
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);