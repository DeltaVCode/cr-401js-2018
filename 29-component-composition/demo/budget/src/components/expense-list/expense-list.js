import React, { Component } from 'react';

import ExpenseItem from '../expense-item/expense-item';

export default class ExpenseList extends Component {
  render() {
    return (
      <ul>
        {this.props.expenses.map(expense => (
          <ExpenseItem expense={expense} />
        ))}
      </ul>
    );
  }
}