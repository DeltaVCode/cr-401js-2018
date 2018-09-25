import React, { Component } from 'react';
import { withRouter, Route, Link } from 'react-router-dom';

import ExpenseForm from '../expense-form/expense-form';
import Modal from '../modal/modal';

class ExpenseItem extends Component {
  render() {
    // Verify we got routing details via withRouter
    // console.log('__PROPS__', this.props);
    const { expense, match, history } = this.props;

    const editLink = `${match.url}/expenses/${expense._id}/edit`;
    const navigateBack = () => history.push(match.url);

    const updateExpense = (expense) => {
      this.props.handleUpdateExpense(expense);
      navigateBack();
    }

    return (
      <li>
        {expense.title} : ${expense.price.toFixed(2)}

        <Link to={editLink}>Edit</Link>

        <Route exact path={editLink} component= {() =>
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
  }
}

export default withRouter(ExpenseItem);
