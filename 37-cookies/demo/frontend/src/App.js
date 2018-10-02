import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Dashboard from './components/dashboard';
import Auth from './components/auth';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <nav>
            <ul>
              <li><Link to="/auth/signup">Sign Up</Link></li>
              <li><Link to="/auth/signin">Sign In</Link></li>
            </ul>
          </nav>
        </header>
        <div className="App-intro">
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/auth/:type" component={Auth} />
        </div>
      </div>
    );
  }
}

export default App;
