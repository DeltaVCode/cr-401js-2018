import React from 'react';
import { withRouter, Route, Link } from 'react-router-dom';

import ExpenseForm from '../expense-form/expense-form';
import Modal from '../modal/modal';

const ExpenseItem = (props) => {
    // Verify we got routing details via withRouter
    // console.log('__PROPS__', props);
    const { expense, match, history } = props;

    const editLink = `${match.url}/expenses/${expense._id}/edit`;
    const navigateBack = () => history.push(match.url);

    const updateExpense = (expense) => {
      props.handleUpdateExpense(expense);
      navigateBack();
    }

    return (
      <li>
        {expense.title} : ${expense.price.toFixed(2)}

        <Link to={editLink}>Edit</Link>

        <Route exact path={editLink} render={() =>
          <Modal title="Edit Expense" show={true} handleClose={navigateBack}>
            <p>Updating a posted expense is a felony!</p>
            <ExpenseForm
              buttonText='Update Expense (not used)'
              expense={expense}
              handleComplete={updateExpense}
              />
          </Modal>} />
      </li>
    );
  };

export default withRouter(ExpenseItem);
