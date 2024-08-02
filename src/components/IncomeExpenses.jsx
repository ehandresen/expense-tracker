import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  console.log(transactions);

  const income = transactions.filter((t) => t.amount > 0);
  const expense = transactions.filter((t) => t.amount < 0);

  console.log(income);
  console.log(expense);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+$0.00</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-$0.00</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
