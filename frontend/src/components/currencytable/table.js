import React, { useContext, useEffect } from "react";
import Row from "../tablerow/tablerow";
import CalculatorContext from "../../context/calculator/calculatorContext";
import Header from "../tableheader/header";
import styles from "./table.module.css";

const COINS = {
  btc: { title: "BTC" },
  eth: { title: "Ether" },
  ae: { title: "ae" },
};

const HEADER_DATA = ["Currency", "Price"];
const Table = () => {
  const calculatorContext = useContext(CalculatorContext);
  const { crypto, fiat, currentFiat } = calculatorContext;
  const keys = Object.keys(crypto);

  const renderCrypto = () => {
    return keys.map((k) => {
      const { title, price } = crypto[k];
      const moneyToDisplay = sumPrice(price);
      return <Row price={moneyToDisplay} key={title} title={title} />;
    });
  };

  const sumPrice = (price) => {
    let money = price;
    if (currentFiat !== "USD") {
      money = (money * fiat[currentFiat]).toFixed(2);
    }
    return money;
  };

  useEffect(() => {
    for (const key in COINS) {
      if (COINS.hasOwnProperty(key)) {
        calculatorContext.fetchCrypto(COINS[key], key);
      }
    }
  }, []);

  return (
    <table className={styles["table"]}>
      <thead>
        <Header tableData={HEADER_DATA} />
      </thead>
      <tbody>{renderCrypto()}</tbody>
    </table>
  );
};

export default Table;
