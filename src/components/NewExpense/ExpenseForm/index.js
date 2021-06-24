import React, { useState } from 'react'

import './style.css';

export function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState(0);
  const [enteredDate, setEnteredDate] = useState('');

  function handlerTitleChange(e) {
    setEnteredTitle(e.target.value)
  }
  
  function handlerAmountChange(e) {
    setEnteredAmount(e.target.value);
  }
  
  function handlerDateChange(e) {
    setEnteredDate(e.target.value);
  }

  function handlerSubmit(e) {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      data: new Date(enteredDate)
    }
    
    console.log(expenseData)
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }


  return (
    <form onSubmit={handlerSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input type="text" value={enteredTitle} onChange={handlerTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={handlerAmountChange} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={handlerDateChange} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}