import React, { useState, useContext } from "react";
import "./ExpenseForm.css";
import ExpenseContext from "../ExpenseContext";
import { UpdateExpenseContext } from "../ExpenseContext";

const ExpenseForm = (props) => {
  const [update, setUpdate] = useContext(UpdateExpenseContext);
  const [enteredTitle, setEnteredTitle] = useState(update.isUpdate?update.updateData.title:"");
  const [enteredAmount, setEnteredAmount] = useState(update.isUpdate?update.updateData.amount:"");
  const [enteredDate, setEnteredDate] = useState(update.isUpdate?update.updateData.date.toISOString().substring(0,10):"");
  const [expenses, setExpenses] = useContext(ExpenseContext);

  
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const updateHandler =()=>{
    console.log(update.updateData);
    console.log(typeof(update.updateData.date.toISOString().substring(0,10)));
    setExpenses(expenses.filter((item) => item.title !== update.updateData.title));
    return;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (!enteredAmount || !enteredDate || !enteredTitle) {
      alert("please fill all input fields");
    } else {
      const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      };

      setExpenses(() => {
        return [expenseData, ...expenses];
      });
      setEnteredAmount("");
      setEnteredDate("");
      setEnteredTitle("");
      !update.isUpdate && props.onCancel();
      update.isUpdate && setUpdate((pre)=>{
        return{isUpdate:false, updateData:pre.updateData}
      }) && props.onFinishUpdate();
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-10-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        {!update.isUpdate && (
          <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        )}
        {update.isUpdate && (
          <div className="new-expense__actions">
            <button onClick={updateHandler}>Update</button>
          </div>
        )}
      </div>
    </form>
  );
};

export default ExpenseForm;
