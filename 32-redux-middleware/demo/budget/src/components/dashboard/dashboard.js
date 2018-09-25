import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExpenseForm from '../expense-form/expense-form';
import ExpenseList from '../expense-list/expense-list';

import * as actions from '../../action/expense-actions';
import * as errorActions from '../../action/error-actions';

class DashboardContainer extends Component {
  handleAddExpense = (expense) => {
    console.log('saving expense', expense);

    if (!expense.title) {
      this.props.validationError('title is required');
      return;
    }

    // Dispatch CLEAR_ERROR to Redux
    this.props.clearError();

    // Dispatch EXPENSE_ADD to Redux
    this.props.expenseAdd(expense);
  }

  handleUpdateExpense = (expense) => {
    console.log('updating expense', expense);

    if (!expense.title) {
      return this.props.validationError('title is required');
    }

    // Dispatch CLEAR_ERROR to Redux
    this.props.clearError();

    // Dispatch EXPENSE_ADD to Redux
    this.props.expenseUpdate(expense);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Dashboard Component</h1>
        {this.props.error &&
          <div className='error'>{this.props.error}</div>}

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
    error: state.error,
  };
}

const mapDispatchToProps = (dispatch) => ({
  expenseAdd: (expense) => dispatch(actions.expenseAdd(expense)),
  expenseUpdate: (expense) => dispatch(actions.expenseUpdate(expense)),

  clearError: () => dispatch(errorActions.clearError()),
  validationError: (err) => dispatch(errorActions.validationError(err)),
});

var connector = connect(mapStateToProps, mapDispatchToProps);
export default connector(DashboardContainer);
