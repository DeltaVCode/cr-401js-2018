import React, { Component } from 'react';

import ExpenseItem from '../expense-item/expense-item';

export default class ExpenseList extends Component {
  render() {
    return (
      <ol className="expenses">
        {this.props.expenses.map(expense => (
          <ExpenseItem
            key={expense._id}
            expense={expense}
            handleUpdateExpense={this.props.handleUpdateExpense}
            />
        ))}
      </ol>
    );
  }
}
