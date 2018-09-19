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

    console.log('saving', this.state)
    this.props.handleAddExpense(this.state);

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
        <button onClick={this.addParking}>Add Parking ($7.50)</button>
      </form>
    );
  }

  addParking = () => {
    this.props.handleAddExpense({
      title: 'Parking',
      price: 7.50,
    });
  }
}
