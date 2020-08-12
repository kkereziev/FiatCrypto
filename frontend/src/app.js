import React, { useState, useEffect, useContext } from "react";
import styles from "./app.module.css";
import FiatSelector from "./components/fiatselector/selector";
import Table from "./components/currencytable/table";
import CalculatorState from "./context/calculator/calculatorState";
import CalculatorContext from "./context/calculator/calculatorContext";

const App = () => {
  const calculatorContext = useContext(CalculatorContext);
  const { crypto, loading } = calculatorContext;
  console.log(calculatorContext);
  const [fiat, setFiat] = useState(["gbp", "bgn", "eur"]);

  useEffect(() => {
    calculatorContext.fetchCrypto();
  }, []);

  return (
    <CalculatorState>
      <div>
        <FiatSelector />
        <div className={styles["gap-30"]}></div>
        <div>List of coins</div>
        <Table crypto={crypto} loading={loading} />
        <div></div>
      </div>
    </CalculatorState>
  );
};

export default App;
