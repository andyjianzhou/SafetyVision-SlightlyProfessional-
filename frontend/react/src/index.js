import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
    BrowserRouter as Router,
    Routers,
    Route,
    Link
  } from "react-router-dom";
import LoginForm from './components/pages/login';
import RegisterForm from './components/pages/register';
class Main extends React.Component {
    render() {
      return (
        <div className = 'loginPage'>
            <div className = 'loginDetails'>
                <LoginForm/>
            </div>
        </div>
      );
    }
}
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Main/>);
  