import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  

  const removeItem = (event) => {
    props.onRemoveExpense(props.expense);
  
  };

  
  return (
    <div className="expense-item">
      <div className="expense-item__date">
        <ExpenseDate date={props.expense.date}></ExpenseDate>
      </div>
      <div className="expense-item__description"><h2>{props.expense.title}</h2></div>
      <div className="expense-item__price">{"$"+props.expense.amount}</div>
      <div className='remove-btn' onClick={removeItem}>❌<span>Remove</span></div>
    </div>
  );
}

export default ExpenseItem;
