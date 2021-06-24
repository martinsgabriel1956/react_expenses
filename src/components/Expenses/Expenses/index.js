import React, { useState } from 'react'

import './style.css';

import { ExpenseItem } from '../../Expenses/ExpenseItem';
import { ExpensesFilter } from '../../NewExpense/ExpensesFilter';
import { Card } from '../../UI/Card';

export function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2019');

  function handleChangeYear(year) {
    setFilteredYear(year);
    console.log(year)
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeYear={handleChangeYear} />
      <ExpenseItem 
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem 
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem 
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem 
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
    
  );
}