import React from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }
}

class Footer extends React.Component {
  render() {
    return(
      <div>
        Footer Text Here
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      polarity: 'neutral'
    }
    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
  }

  //handleUp() { Incorrect - Cannot modify state directly
    //this.state.counter = this.state.counter + 1;
  //}

  handleUp() {
    // Incorrect - should not update state based on this.state
    // this.updateState(this.state.counter + 1);
 
    this.addToCounter(1);
  }

  handleDown() {
    this.addToCounter(-1);
  }

  addToCounter(addThis) {
    // Use setState with a function to update based on prevState
    this.setState(prevState => {
      var counter = prevState.counter + addThis;

      return {
        counter,
        polarity:
          counter < 0 ? 'negative' :
          counter > 0 ? 'positive' :
          null,
      };
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <section>
          <h2>Counter App</h2>
          <div className="container">
            <div className={this.state.polarity} id="counter">
              {this.state.counter}
            </div>
            <a onClick={this.handleUp} href="#" id="up">Up</a>
            <a onClick={this.handleDown} href="#" id="down">Down</a>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
