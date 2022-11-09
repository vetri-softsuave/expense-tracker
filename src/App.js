import React, { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";


function App() {
  const [expense, setExpense] = useState([]);
  
  const addNewExpense = (expenseData) => {
    setExpense((prevexpense) => {
      return [expenseData, ...expense];
    });
  };

  const removeExpense = (removeData) => {
    setExpense(expense.filter((item) => item.title !== removeData.title));
  };

 

  return (
    <div className="main">
      <h1 className="header">Expense Tracker</h1>
      <NewExpense onAddNewExpense={addNewExpense} />
      <ExpenseList expenses={expense} onRemoveExpense={removeExpense}/>
    </div>
  );
}

export default App;
