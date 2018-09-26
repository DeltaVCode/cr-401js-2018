import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from '../expense-form/expense-form';
import ExpenseList from '../expense-list/expense-list';

import * as actions from '../../action/expense-actions';
import * as errorActions from '../../action/error-actions';

const DashboardContainer = ({ expenses, expenseAdd, expenseUpdate, error }) =>
    (
      <React.Fragment>
        <h1>Dashboard Component</h1>
        {error &&
          <div className='error'>{error}</div>}

        <ExpenseForm
          handleComplete={expenseAdd}
          />

        <ExpenseList
          expenses={expenses}
          handleUpdateExpense={expenseUpdate}
          />
      </React.Fragment>
    );

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
