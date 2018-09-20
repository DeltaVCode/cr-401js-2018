import React, { Component } from 'react';

import ExpenseForm from '../expense-form/expense-form';

export default class ExpenseItem extends Component {
  updateExpense = (expense) => {
    this.props.handleUpdateExpense(expense);
  }

  render() {
    const { expense } = this.props;
    return (
      <li>
        {expense.title} : ${expense.price.toFixed(2)}
        <div className="modal">{/* TODO */}
          <ExpenseForm
            buttonText='Update Expense (not used)'
            expense={expense}
            handleComplete={this.updateExpense}
            />
        </div>
      </li>
    );
  }
}
