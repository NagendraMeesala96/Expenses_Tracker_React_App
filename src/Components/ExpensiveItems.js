import "./ExpensiveItems.css";
import { Fragment, useState } from "react";
import ExpensiveItemCard from "./ExpensiveItemCard";
import Chart from "./Chart/Chart";
import ChartBar from "./Chart/ChartBar";

function ExpensiveItems() {
  const [expensiveItems, setExpensiveItems] = useState([
    {
      id: "a1",
      title: "New Tv",
      date: new Date(2020, 7, 14),
      price: 5000.45,
    },
    {
      id: "a2",
      title: "New Mobile",
      date: new Date(2022, 5, 1),
      price: 500.01,
    },
    {
      id: "a3",
      title: "New Bike",
      date: new Date(2022, 2, 1),
      price: 900.01,
    },
  ]);

  const [enteredTitle, setEnteredTitle] = useState("");

  const [enteredAmount, setEnteredAmount] = useState("");

  const [enteredDate, setEnteredDate] = useState("");

  const [filteredYear, setFilteredYear] = useState("2022");

  //title Handler
  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  //Amount Handler
  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  //Date Handler
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  //Submit Handler
  const submitHandler = () => {
    let expenseData = {
      id: Math.random().toString(),
      title: enteredTitle,
      date: new Date(enteredDate),
      price: enteredAmount,
    };

    setExpensiveItems([...expensiveItems, expenseData]);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  //Filter Handler
  const filterHandler = (event) => {
    setFilteredYear(event.target.value);
  };

  const filteredItems = expensiveItems.filter((expense) => {
    return expense.date.getFullYear() == filteredYear;
  });

  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of filteredItems) {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.price;
  }

  return (
    <Fragment>
      <div className="expensive-items">
        <div className="expensive-header">
          <div className="container">
            <h4 className="text-white">Expenses Tracker</h4>
            <div className="row mt-4">
              <div className="col-lg-6">
                <input
                  type="text"
                  placeholder="Title"
                  className="form-control"
                  value={enteredTitle}
                  onChange={titleHandler}
                />
              </div>
              <div className="col-lg-6">
                <input
                  type="text"
                  placeholder="Amount"
                  className="form-control"
                  value={enteredAmount}
                  onChange={amountHandler}
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-6">
                <input
                  type="date"
                  placeholder="Title"
                  className="form-control"
                  required
                  value={enteredDate}
                  onChange={dateHandler}
                />
              </div>
              <div className="col-lg-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  onClick={submitHandler}
                  value="Add New Expense"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="expensive-body">
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <h4>Filter By Year</h4>
              </div>
              <div className="col-lg-2">
                <select
                  className="form-select drop-down"
                  onChange={filterHandler}
                >
                  <option value={2022}>2022</option>
                  <option value={2021}>2021</option>
                  <option value={2020}>2020</option>
                </select>
              </div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Chart dataPoints={chartDataPoints} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <ExpensiveItemCard expensiveItems={filteredItems} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ExpensiveItems;
