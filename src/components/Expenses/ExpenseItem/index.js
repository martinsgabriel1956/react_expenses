import { ExpenseDate } from '../../Expenses/ExpenseDate';
import { Card } from '../../UI/Card';

import './style.css'

export function ExpenseItem(props) {
  function handleClick() {
    console.log("Clicked!!!")
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={handleClick}>Change title</button>
    </Card>
  );
}