import React, { useEffect, useContext } from "react";
import styles from "./app.module.css";
import FiatSelector from "./components/fiatselector/selector";
import Table from "./components/currencytable/table";
import CalculatorState from "./context/calculator/calculatorState";

const App = () => {
  useEffect(() => {}, []);

  return (
    <CalculatorState>
      <FiatSelector />
      <div className={styles["gap-30"]}></div>
      <div>List of coins</div>
      <Table />
    </CalculatorState>
  );
};

export default App;
