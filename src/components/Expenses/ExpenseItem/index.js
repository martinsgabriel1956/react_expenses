import React, { useState } from 'react'

import { ExpenseDate } from '../../Expenses/ExpenseDate';
import { Card } from '../../UI/Card';

import './style.css'

export function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}