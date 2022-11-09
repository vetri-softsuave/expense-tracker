import React, { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseContext from "./components/ExpenseContext";
import { UpdateExpenseContext } from "./components/ExpenseContext";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [update, setUpdate] = useState({isUpdate:false,updateData:{}});

  return (
    <div className="main">
      <h1 className="header">Expense Tracker</h1>
      <ExpenseContext.Provider value={[expenses, setExpenses]}>
        <UpdateExpenseContext.Provider value={[update,setUpdate]}>
          <NewExpense />
          <ExpenseList />
        </UpdateExpenseContext.Provider>
      </ExpenseContext.Provider>
    </div>
  );
}

export default App;
