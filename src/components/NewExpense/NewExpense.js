import React, { useState, useContext } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { UpdateExpenseContext } from "../ExpenseContext";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const [update] = useContext(UpdateExpenseContext);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  let newExpenseContent = (
    <div>
      <button onClick={startEditingHandler}>Add New Expense</button>
    </div>
  );

  return (
    <div className="new-expense">
      {!update.isUpdate && !isEditing && newExpenseContent}
      {!update.isUpdate && isEditing && (
        <ExpenseForm onCancel={stopEditingHandler} />
      )}
      {update.isUpdate && <ExpenseForm onFinishUpdate={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
