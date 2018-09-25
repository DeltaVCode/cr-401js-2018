import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import uuid from 'uuid';
import './App.css';

import { Provider } from 'react-redux';
import createAppStore from './lib/store';

import Dashboard from './components/dashboard/dashboard';

const store = createAppStore();


class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      store.dispatch({
        type: 'EXPENSE_ADD',
        payload: { _id: uuid(), title: 'Test Expense', price: 2.5 },
      })
    }, 2000);
  }

  render() {
    // make our Redux store available to my children
    return (<Provider store={store}>
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
              component={Dashboard} />
          </main>

          <footer>
            &copy; 2018 DeltaV

            <Route path="/dashboard"
              component={() => <p>This is a dashboard-only footer</p>} />
          </footer>
        </div>
      </BrowserRouter>
    </Provider>);
  }
}

export default App;
