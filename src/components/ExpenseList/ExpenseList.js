import React, { useState, useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpenseContext from "../ExpenseContext";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const [expenses, setExpenses] = useContext(ExpenseContext);

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  const removeExpense = (removeData) => {
    setExpenses(expenses.filter((item) => item.title !== removeData.title));
  };

  let expensesContent = <p className="default">No expenses found</p>;
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((exp, index) => (
      <ExpenseItem
        key={index}
        expense={exp}
        onRemoveExpense={removeExpense}
      ></ExpenseItem>
    ));
  }
  return (
    <div className="expense-container">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {expensesContent}
    </div>
  );
};

export default ExpenseList;
