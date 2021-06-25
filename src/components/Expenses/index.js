import React, { useState } from 'react'

import './style.css';

import { ExpensesFilter } from '../NewExpense/ExpensesFilter';
import { Card } from '../UI/Card';
import { ExpensesList } from './ExpensesList';

export function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  function handleChangeYear(year) {
    setFilteredYear(year);
  }

  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeYear={handleChangeYear} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}