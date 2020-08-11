import React from "react";
import Row from "../tablerow/tablerow";

const Table = ({ crypto, loading }) => {
  const renderCrypto = () => {
    const keys = Object.keys(crypto);
    return keys.map((k) => {
      return (
        <Row
          price={crypto[k].price}
          title={crypto[k].title}
          key={crypto[k].title}
        />
      );
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <table>
        <thead></thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    );
  }
};

export default Table;
