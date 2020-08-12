import React, { useState, useEffect } from "react";
import styles from "./app.module.css";
import FiatSelector from "./components/fiatselector/selector";
import Table from "./components/currencytable/table";

const App = () => {
  //const {crypto,setCrypto}=useState({});
  const [crypto, setCrypto] = useState({
    btc: { title: "BTC" },
    eth: { title: "Ether" },
    ae: { title: "ae" },
  });
  const [fiat, setFiat] = useState(["gbp", "bgn", "eur"]);
  const [loading, setLoading] = useState(false);

  const setAttribute = async (key, value) => {
    setLoading(true);
    setCrypto((prevState) => ({
      ...prevState,
      [key]: { ...crypto[key], price: value["price"] },
    }));
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    const fetchCrypto = async () => {
      for (const c in crypto) {
        if (crypto.hasOwnProperty(c)) {
          const cryptoPromise = await fetch(`http://localhost:8080/price/${c}`);
          const price = await cryptoPromise.json();
          setAttribute(c, price);
        }
      }
    };

    fetchCrypto();
    setLoading(false);
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
