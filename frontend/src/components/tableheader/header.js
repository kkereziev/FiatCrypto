import React from "react";
import styles from "./header.module.css";
const Header = ({ tableData }) => {
  const renderData = () => {
    return tableData.map((h) => {
      return <th className={styles["th"]}>{h}</th>;
    });
  };
  return <tr>{renderData()}</tr>;
};

export default Header;
