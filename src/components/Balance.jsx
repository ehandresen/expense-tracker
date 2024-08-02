import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amount = transactions.map((t) => t.amount);

  const total = amount
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};

export default Balance;
