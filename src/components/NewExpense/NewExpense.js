import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

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
      {!isEditing && newExpenseContent}
      {isEditing && <ExpenseForm onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
