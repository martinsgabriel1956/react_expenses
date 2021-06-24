import React, { useState } from 'react'

import './style.css';

import { ExpenseItem } from '../../Expenses/ExpenseItem';
import { ExpensesFilter } from '../../NewExpense/ExpensesFilter';
import { Card } from '../../UI/Card';

export function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  function handleChangeYear(year) {
    setFilteredYear(year);
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeYear={handleChangeYear} />
      {props.items.map(expense => (
        <ExpenseItem 
          key={expense.id}
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date} 
        />
      ))}
    </Card>
  );
}