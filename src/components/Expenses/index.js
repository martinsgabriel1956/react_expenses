import React, { useState } from 'react'

import './style.css';

import { ExpensesFilter } from '../NewExpense/ExpensesFilter';
import { Card } from '../UI/Card';
import { ExpensesList } from './ExpensesList';
import { ExpensesChart } from './ExpensesChart';

export function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  function handleChangeYear(year) {
    setFilteredYear(year);
  }

  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeYear={handleChangeYear} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}