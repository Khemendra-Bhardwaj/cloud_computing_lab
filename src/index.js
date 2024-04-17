import React from 'react';
import  ReactDOM  from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
// import App from './App';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
// import {HelloWorld} from './HelloWorldComponent';
import Calculator from './Calculator';
import TodoList from './TodoList';
import MyCalendar from './BigCalender';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-1z1r0235ul7slvv2.us.auth0.com"
    clientId="xJyD6TnBERcYkohdXbzY5Sqd2Ls9kOl0"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  > 


  <BrowserRouter> 
    <Routes>
      
      <Route path='/' element={<App/> }>  </Route>
       
      <Route path='/calender' element={ <MyCalendar/> }> </Route>
      <Route path='/todolist' element={ <TodoList/> }>  </Route>

      {/* </Route> */}
    </Routes>
  </BrowserRouter>
    

  </Auth0Provider>,
);