import React from 'react';
import { ExpenseForm } from '../ExpenseForm';

import './style.css';

export function NewExpense(props) {
  function handlerSaveExpenseData(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={handlerSaveExpenseData} />
    </div>
  );
};
