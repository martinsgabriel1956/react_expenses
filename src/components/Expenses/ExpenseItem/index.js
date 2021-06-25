import React from 'react';

import { ExpenseDate } from '../../Expenses/ExpenseDate';
import { Card } from '../../UI/Card';

import './style.css'

export function ExpenseItem(props) {
  return (
    <ul>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
      </Card>
    </ul>
  );
}