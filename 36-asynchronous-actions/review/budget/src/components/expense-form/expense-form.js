import React, { Component } from 'react';

const defaultState = {
  title: '',
  price: 0,
};

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    // Initialize form
    this.state = props.expense || defaultState;
  }

  componentDidUpdate() {
    console.log('__FORM_STATE__', this.state);
  }

  // Note this is not handleSubmit(event)
  // so we don't have to this.handleSubmit.bind(this)
  handleSubmit = (event) => {
    event.preventDefault();

    console.log('saving', this.state)
    this.props.handleComplete(this.state);

    // Reset insert form
    if (!this.props.expense) {
      this.setState(defaultState);
    }
    // this.setState(this.props.expense ? this.state : defaultState);
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
        <button type="submit" className="first-form-button">
          {this.props.expense ? 'Update' : 'Create'}
          {' '}{/* <= this is how you insert an actual space in HTML */}
          Expense

          {/*
            // Or we could receive the text as a prop
            this.props.buttonText
          */}
        </button>
        {
          // this.props.expense ? null : <button />
          // this.props.expense ? false : <button />
          // this.props.expense ? '' : <button />
          !this.props.expense &&
            <button onClick={this.addParking}>Add Parking ($7.50)</button>
        }
      </form>
    );
  }

  addParking = (event) => {
    event.preventDefault();
    this.props.handleComplete({
      title: 'Parking',
      price: 7.50,
    });
  }
}
