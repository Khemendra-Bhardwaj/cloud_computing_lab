import React, { Component } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css'; // Importing the CSS file for styling

function ServiceCard({ serviceName }) {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="service-card">
      <h3>{serviceName}</h3>
      {serviceName === 'Task Planner' ? (
        <a href="/calender" className="service-button">Learn More</a>
      ) : (
        <a href="/todolist" className="service-button">Learn More</a>
      )}
    </div>
  );
}


function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Welcome to Home Page</h1>
        {isAuthenticated && (
          <>
            <h2 className="username">Hello, {user.name}</h2>
            <div className="service-cards">
              <ServiceCard serviceName="Task Planner" />
              <ServiceCard serviceName="TodoList" />

              {/* <Calendar/>  */}
            </div>
            <button className="logout-button" onClick={logout}>Logout</button>
            <div> 

            </div>
           </>
        )}
        {!isAuthenticated && (
          <button className="login-button" onClick={loginWithRedirect}>Login With Redirect</button>
        )}
      </div>
      {/* <ServiceCard serviceName="Calculator" /> */}
    </div>
  );
}

export default App;
