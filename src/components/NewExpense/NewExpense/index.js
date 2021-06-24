import React from 'react';
import { ExpenseForm } from '../ExpenseForm';

import './style.css';

export function NewExpense() {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};
