import React, { Component } from 'react';

export default class ExpenseItem extends Component {
  render() {
    const { expense } = this.props;
    return (
      <li key={expense._id}>
        {expense.title} : ${expense.price.toFixed(2)}
      </li>
    );
  }
}
