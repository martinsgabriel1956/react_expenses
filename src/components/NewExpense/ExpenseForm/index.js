import React, { useState } from 'react'

import './style.css';

export function ExpenseForm() {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  })

  function handlerTitleChange(e) {
    setUserInput({
      ...userInput,
      enteredTitle: e.target.value
    })
  }
  
  function handlerAmountChange(e) {
    setUserInput({
      ...userInput,
      enteredAmount: e.target.value
    })
  }
  
  function handlerDateChange(e) {
    setUserInput({
      ...userInput,
      enteredDate: e.target.value
    })
  }


  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>title</label>
          <input type="text" onChange={handlerTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={handlerAmountChange} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={handlerDateChange} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}