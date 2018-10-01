import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from '../expense-form/expense-form';
import ExpenseList from '../expense-list/expense-list';

import * as actions from '../../action/expense-actions';
import * as errorActions from '../../action/error-actions';

const DashboardContainer = ({ category, expenses, expenseAdd, expenseUpdate, error }) =>
    (
      category === null ? <h1>Not Found</h1> :
      <React.Fragment>
        <h1>{category ? `${category.title} Expenses` : 'All Expenses'}</h1>
        {error &&
          <div className='error'>{error}</div>}

        <ExpenseForm
          categoryId={category && category._id}
          handleComplete={expenseAdd}
          />

        <ExpenseList
          expenses={expenses}
          handleUpdateExpense={expenseUpdate}
          />
      </React.Fragment>
    );

const mapStateToProps = (state, ownProps) => {
  console.log({...ownProps});
  const { params } = ownProps.match;
  return {
    category: params.id && (state.categories.find(cat => cat._id === params.id) || null),
    expenses: params.id ?
      state.expenses.filter(exp => exp.categoryId === params.id) :
      state.expenses,
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
