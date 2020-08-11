import React, { useState, useEffect } from "react";
import styles from "./app.module.css";
import FiatSelector from "./components/fiatselector/selector";
import Table from "./components/currencytable/table";

const App = () => {
  const [crypto, setCrypto] = useState({
    btc: { title: "BTC" },
    eth: { title: "Ether" },
    ae: { title: "ae" },
  });
  const [fiat, setFiat] = useState(["gbp", "bgn", "eur"]);
  const [loading, setLoading] = useState(false);
  const [btc, setBtc] = useState({});

  const setAttribute = async (property, value) => {
    let newObj = crypto;
    let newProperty = { ...crypto[property] };
    newProperty.price = value["price"];
    newObj[property] = newProperty;
    setCrypto(newObj);
  };

  useEffect(() => {
    setLoading(true);
    const fetchCrypto = async () => {
      for (const key in crypto) {
        if (crypto.hasOwnProperty(key)) {
          const cryptoPromise = await fetch(
            `http://localhost:8080/price/${key}`
          );
          const price = await cryptoPromise.json();
          setAttribute(key, price);
        }
      }
    };
    fetchCrypto();
    setLoading(false);
    console.log(crypto["btc"]);
  }, []);

  return (
    <div>
      <FiatSelector />
      <div className={styles["gap-30"]}></div>
      <div>List of coins</div>
      <Table crypto={crypto} loading={loading} />
      <div></div>
    </div>
  );
};

export default App;
