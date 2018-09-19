import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

import Dashboard from './components/dashboard/dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">

          <header className="App-header">
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
              </ul>
            </nav>
          </header>

          <main>
            <Route exact path="/"
              component={() => <h1>Home</h1>} />

            <Route exact path="/dashboard"
              component={() => <Dashboard test="prop" />} />
          </main>

          <footer>
            &copy; 2018 DeltaV

            <Route path="/dashboard"
              component={() => <p>This is a dashboard-only footer</p>} />
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
