import "./styles.css";

import { ExpenseItem } from "../ExpenseItem";

export function ExpensesList(props) {
  return (
    <ul className="expenses-list">
      {props.items.length === 0 ? (
        <h2 className="expenses-list__fallback">Find no expenses.</h2>
      ) : (
        props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </ul>
  );
}
