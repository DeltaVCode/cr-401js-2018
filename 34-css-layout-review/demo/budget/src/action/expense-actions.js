import uuid from 'uuid/v4';

export const expenseAdd = (expense) => {
  expense._id = uuid();
  expense.createdOn = new Date();

  return {
    type: 'EXPENSE_ADD',
    payload: expense,
  };
};

export const expenseUpdate = (expense) => {
  expense.updatedOn = new Date();

  return {
    type: 'EXPENSE_UPDATE',
    payload: expense,
  };
}
// {}