import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExpenseForm from '../expense-form/expense-form';
import ExpenseList from '../expense-list/expense-list';

import * as actions from '../../action/expense-actions';

class DashboardContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      error: null,
    };
  }

  handleAddExpense = (expense) => {
    console.log('saving expense', expense);

    if (!expense.title) {
      this.setState({ error: 'title is required' });
      return;
    }

    // Dispatch EXPENSE_ADD to Redux
    this.props.expenseAdd(expense);

    this.setState(({
      error: null,
    }));
  }

  handleUpdateExpense = (expense) => {
    console.log('updating expense', expense);

    if (!expense.title) {
      return this.setState({ error: 'title is required' });
    }

    // Dispatch EXPENSE_ADD to Redux
    this.props.expenseUpdate(expense);

    this.setState(({
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
          handleComplete={this.handleAddExpense}
          />

        <ExpenseList
          expenses={this.props.expenses}
          handleUpdateExpense={this.handleUpdateExpense}
          />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
}

const mapDispatchToProps = (dispatch) => ({
  expenseAdd: (expense) => dispatch(actions.expenseAdd(expense)),
  expenseUpdate: (expense) => dispatch(actions.expenseUpdate(expense)),
});

var connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(DashboardContainer);
