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

  handleAddExpense = (expense) => {
    console.log('saving expense', expense);

    if (!expense.title) {
      this.setState({ error: 'title is required' });
      return;
    }

    expense._id = uuid();
    expense.createdOn = new Date();
    // Add new expense to the end of existing list
    // NEVER MUTATE STATE, e.g. this.state.expenses.push(...)
    this.setState(prevState => ({
      expenses: [...prevState.expenses, expense],
      // expenses: prevState.expenses.concat([expense]),
      error: null,
    }));
  }

  render() {
    return (
      <React.Fragment>
        <h1>Dashboard Component</h1>
        {this.state.error &&
          <div className='error'>{this.state.error}</div>}

        <ExpenseForm
          handleAddExpense={this.handleAddExpense}
          />

        <ExpenseList expenses={this.state.expenses} />
      </React.Fragment>
    );
  }
}

class ExpenseList extends Component {
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

class ExpenseItem extends Component {
  render() {
    const { expense } = this.props;
    return (
      <li key={expense._id}>
        {expense.title} : ${expense.price.toFixed(2)}
      </li>
    );
  }
}
