import React, { useState } from "react";
import { ExpenseForm } from "./ExpenseForm";

import "./style.css";

export function NewExpense(props) {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  function handleAddNewExpense() {
    setShowExpenseForm(true);
  }

  function handlerSaveExpenseData(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      {showExpenseForm ? (
        <ExpenseForm onFormDisplay={setShowExpenseForm} onSaveExpenseData={handlerSaveExpenseData} />
      ) : (
        <button onClick={handleAddNewExpense}>Add New Expense</button>
      )}
    </div>
  );
}
