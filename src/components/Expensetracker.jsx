import { useState } from "react";

export const ExpenseTracker = () => {
  const [expenselist, setExpenseList] = useState([]);
  const [totalexpense, setTotalexpense] = useState(0);
  const [expense, setExpense] = useState({
    title: "",
    amount: 0,
    category: "Food",
  });
  const handleExpense = () => {
    const total = expenselist.reduce(
      (acc, curr) => acc + parseInt(curr.amount),
      0,
    );
    setExpenseList([...expenselist, expense]);

    setTotalexpense(total);
    setExpense({
      title: "",
      amount: 0,
      category: "Food",
    });
  };
  const handleDelete = (title) => {
    const tempitems = expenselist.filter((item) => item.title !== title);
    setExpenseList(tempitems);
  };
  return (
    <div className="flex flex-col items-center">
      <p className="font-bold text-2xl">Expense Tracker</p>
      <p className="font-bold text-xl text-green-500">
        Total Expense : {totalexpense}
      </p>
      <div className="flex flex-col">
        <div className="flex items-center justify-between m-2">
          <label className="m-2" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="p-2 rounded-lg bg-white"
            value={expense.title}
            onChange={(e) => setExpense({ ...expense, title: e.target.value })}
          />
        </div>
        <div className="flex items-center justify-between m-2">
          <label className="m-2" htmlFor="amount">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            className="p-2 rounded-lg bg-white"
            value={expense.amount}
            onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
          />
        </div>
        <div className="flex items-center justify-between m-2">
          <label className="m-2" htmlFor="category">
            Category
          </label>
          <select
            className="p-2 rounded-lg bg-white"
            id="category"
            value={expense.category}
            onChange={(e) =>
              setExpense({ ...expense, category: e.target.value })
            }
          >
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Shopping">Shopping</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <button className="rounded-lg bg-red-300" onClick={handleExpense}>
          Add Expense
        </button>
      </div>
      <div>
        {expenselist.map((expenseitem, index) => (
          <div
            key={index + 1}
            className="rounded-lg p-3 flex items-center justify-between bg-white m-4 w-200"
          >
            <p className="font-bold">{expenseitem.title}</p>
            <p>{expenseitem.category}</p>
            <p>{expenseitem.amount}</p>
            <button
              className="bg-yellow-300 p-3 rounded-lg"
              onClick={() => handleDelete(expenseitem.title)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
