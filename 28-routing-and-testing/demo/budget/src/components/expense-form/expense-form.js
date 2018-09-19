import React, { Component } from 'react';

export default class ExpenseForm extends Component {

  render() {
    return (
      <form>
        <input
          type="text"
          name="title"
          placeholder="title"
          />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="price"
          />
        <button type="submit">Create Expense</button>
      </form>
    );
  }
}
