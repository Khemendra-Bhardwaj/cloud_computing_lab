import React, { Component } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css'; // Importing the CSS file for styling
// import ResultComponent from './components/b';
// import KeyPadComponent from './components/a';

function ServiceCard({ serviceName }) {
  const { user, isAuthenticated, logout } = useAuth0();

  return (
    <div className="service-card">
      <h3>{serviceName}</h3>
      {/* {serviceName === "Calculator" && isAuthenticated && <Calculator />} */}
      {/* Conditionally render calculator component only if serviceName is "Calculator" and user is authenticated */}
      <button className="service-button">Learn More</button>
    </div>
  );
}

// class Calculator extends Component {
//   state = {
//     result: ""
//   }

//   onClick = button => {
//     if(button === "=") {
//       this.calculate();
//     }

//     else if(button === "C") {
//       this.reset();
//     }

//     else if(button === "CE") {
//       this.backspace();
//     }

//     else {
//       this.setState({
//         result: this.state.result + button
//       })
//     }
//   };

//   calculate = () => {
//     var checkResult = ''
//     if(this.state.result.includes('--')) {
//       checkResult = this.state.result.replace('--', '+')
//     } else {
//       checkResult = this.state.result;
//     }

//     try {
//       this.setState({
//         result: (eval(checkResult) || "") + ""
//       })
//     } catch(e) {
//       this.setState({
//         result: "error"
//       })
//     }
//   };

//   reset = () => {
//     this.setState({
//       result: ""
//     })
//   };

//   backspace = () => {
//     this.setState({
//         result: this.state.result.slice(0, -1)
//     })
//   };

//   render() {
//     return (
//       <div>
//         <div className="calculator-body">
//           <h1>Simple Calculator</h1>
//           <ResultComponent result={this.state.result} />
//           <KeyPadComponent onClick={this.onClick} />
//         </div>
//       </div>
//     )
//   }
// }

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
              <ServiceCard serviceName="Attendance Tracker " />
              <ServiceCard serviceName=" Resume Editor" />
              {/* <ServiceCard serviceName="Calculator" /> */}
              {/* <Calendar/>  */}
            </div>
            <button className="logout-button" onClick={logout}>Logout</button>
          </>
        )}
        {!isAuthenticated && (
          <button className="login-button" onClick={loginWithRedirect}>Login With Redirect</button>
        )}
      </div>
    </div>
  );
}

export default App;
