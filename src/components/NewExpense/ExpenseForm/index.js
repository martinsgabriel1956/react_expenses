import React, { useState } from 'react'

import './style.css';

export function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
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
      date: new Date(enteredDate)
    }
    
    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  function handleClearForm() {
    props.onFormDisplay(false);
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
          <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={handlerDateChange} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={handleClearForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}