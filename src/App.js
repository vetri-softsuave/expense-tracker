import React, { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseContext from "./components/ExpenseContext";

function App() {
  const [expenses, setExpenses] = useState([]);

  return (
    <div className="main">
      <h1 className="header">Expense Tracker</h1>
      <ExpenseContext.Provider value={[expenses, setExpenses]}>
        <NewExpense />
        <ExpenseList />
      </ExpenseContext.Provider>
    </div>
  );
}

export default App;
