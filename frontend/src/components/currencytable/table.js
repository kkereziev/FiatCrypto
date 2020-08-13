import React, { useContext, useEffect } from "react";
import Row from "../tablerow/tablerow";
import CalculatorContext from "../../context/calculator/calculatorContext";

const COINS = {
  btc: { title: "BTC" },
  eth: { title: "Ether" },
  ae: { title: "ae" },
};
const Table = ({ loading }) => {
  const calculatorContext = useContext(CalculatorContext);
  const { crypto } = calculatorContext;
  const renderCrypto = () => {
    const keys = Object.keys(crypto);
    return keys.map((k) => {
      return (
        <Row
          price={crypto[k].price}
          key={crypto[k].price}
          title={crypto[k].title}
        />
      );
    });
  };

  useEffect(() => {
    for (const key in COINS) {
      if (COINS.hasOwnProperty(key)) {
        calculatorContext.fetchCrypto(COINS[key], key);
      }
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <table>
        <thead></thead>
        <tbody>{renderCrypto()}</tbody>
      </table>
    );
  }
};

export default Table;
