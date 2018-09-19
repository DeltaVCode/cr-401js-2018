import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

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
              component={() => <h1>Dashboard</h1>} />
          </main>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
