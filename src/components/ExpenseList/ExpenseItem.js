import React, { useContext } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { UpdateExpenseContext } from "../ExpenseContext";

function ExpenseItem(props) {
  const [update, setUpdate] = useContext(UpdateExpenseContext);
 
  const removeItem = () => {
    props.onRemoveExpense(props.expense);
  };

  const editItem = (event) => {
    if(update.isUpdate){
      alert('please update already selected expense')
    }
    setUpdate((pre) => {
      return { isUpdate: true, updateData:props.expense };
    });
    console.log(update.updateData);
    window.scrollTo(0, 0)
  };

  return (
    <div className="expense-item">
      <div className="expense-item__date">
        <ExpenseDate date={props.expense.date}></ExpenseDate>
      </div>
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
      </div>
      <div className="expense-item__price">{"$" + props.expense.amount}</div>
      <div className="remove-btn" onClick={removeItem}>
        ❌<span>Remove</span>
      </div>
      <div className="edit-btn" onClick={editItem}>
        Edit
      </div>
    </div>
  );
}

export default ExpenseItem;
