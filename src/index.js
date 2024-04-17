import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-1z1r0235ul7slvv2.us.auth0.com"
    clientId="xJyD6TnBERcYkohdXbzY5Sqd2Ls9kOl0"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);