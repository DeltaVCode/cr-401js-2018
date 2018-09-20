import React, { Component } from 'react';

import ExpenseForm from '../expense-form/expense-form';
import Modal from '../modal/modal';

export default class ExpenseItem extends Component {
  constructor(props) {
    super(props);

    this.state = { showEdit: false };
  }

  updateExpense = (expense) => {
    this.props.handleUpdateExpense(expense);
  }

  showEditModal = () => {
    // NEVER UPDATE state DIRECTLY
    // this.state.showEdit = true;
    this.setState({
      showEdit: true,
    });
  }

  hideEditModal = () => {
    this.setState({ showEdit: false });
  }

  render() {
    const { expense } = this.props;
    return (
      <li>
        {expense.title} : ${expense.price.toFixed(2)}

        <button onClick={this.showEditModal}>Edit</button>

        <Modal show={this.state.showEdit} handleClose={this.hideEditModal}>
          <ExpenseForm
            buttonText='Update Expense (not used)'
            expense={expense}
            handleComplete={this.updateExpense}
            />
        </Modal>
      </li>
    );
  }
}
