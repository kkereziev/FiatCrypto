import React, { useState, useEffect, useContext } from "react";
import styles from "./fiatsselector.module.css";
import CalculatorContext from "../../context/calculator/calculatorContext";

const OPTIONS = ["USD", "BGN", "EUR", "GBP"];
const FiatSelector = () => {
  const calculatorContext = useContext(CalculatorContext);
  const { currentFiat, fetchFiat, changeFiat } = calculatorContext;

  const rednerOptions = () => {
    return OPTIONS.map((opt) => {
      return (
        <option key={opt} value={opt}>
          {opt}
        </option>
      );
    });
  };

  useEffect(() => {
    for (const value of OPTIONS) {
      fetchFiat(value);
    }
  }, []);

  const onChangeOption = (e) => {
    changeFiat(e.target.value);
  };
  return (
    <div>
      <select
        required
        className={styles["select-css"]}
        value={currentFiat}
        onChange={onChangeOption}
      >
        {rednerOptions()}
      </select>
    </div>
  );
};

export default FiatSelector;
