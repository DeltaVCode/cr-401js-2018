import React, { Component } from 'react';

const defaultState = {
  title: '',
  price: 0,
};

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    // Initialize form
    this.state = defaultState;
  }

  // Note this is not handleSubmit(event)
  // so we don't have to this.handleSubmit.bind(this)
  handleSubmit = (event) => {
    event.preventDefault();

    // TODO: actually save the expense
    console.log('saving', this.state)

    // Reset form
    this.setState(defaultState);
  }

  handleChange = (event) => {
    const { name, value, type } = event.target;

    // Set property matching current input name to value
    this.setState({
      [name]: type === 'number' ? +value : value,
    });
  }

  /* equivalent to above, but tedious to write
  handleTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  }
  */

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="title"
          value={this.state.title}
          onChange={this.handleChange}
          />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="price"
          value={this.state.price}
          onChange={this.handleChange}
          />
        <button type="submit">Create Expense</button>
      </form>
    );
  }
}
