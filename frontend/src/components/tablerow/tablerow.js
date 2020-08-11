import React, { Component, Fragment } from "react";
import style from "./tablerow.model.css";
const Row = ({ price, title }) => {
  return (
    <tr className={style.td}>
      <td className={style.td}>{title}</td>
      <td className={style.td}>{price}</td>
    </tr>
  );
};

export default Row;
