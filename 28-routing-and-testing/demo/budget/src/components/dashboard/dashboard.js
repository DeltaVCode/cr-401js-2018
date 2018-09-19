import React, { Component } from 'react';
import uuid from 'uuid';

import ExpenseForm from '../expense-form/expense-form';

export default class Dashboard extends Component {
  constructor(props){
    super(props);

    this.state = {
      expenses: [
        { _id: uuid(), title: 'Test Expense', price: 2.5 },
      ],
      error: null,
    };
  }

  renderExpenseList() {
    return (
      <ul>
        {this.state.expenses.map(expense => (
          <li key={expense._id}>
            {expense.title} : ${expense.price.toFixed(2)}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <React.Fragment>
        <h1>Dashboard Component</h1>

        <ExpenseForm />

        { this.renderExpenseList() }
      </React.Fragment>
    );
  }
}
