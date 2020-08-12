import React, { useReducer } from "react";
import CalculatorContext from "./calculatorContext";
import CalculatorReducer from "./calculatorReducer";

import { GET_CRYPTO, GET_FIAT, SET_LOADING } from "../types";

const CalculatorState = (props) => {
  const initialState = {
    crypto: {
      btc: { title: "BTC" },
      eth: { title: "Ether" },
      ae: { title: "ae" },
    },
    loading: false,
  };

  const [state, dispatch] = useReducer(CalculatorReducer, initialState);

  //fetch crypto
  const fetchCrypto = async () => {
    setLoading(true);
    for (const c in crypto) {
      if (crypto.hasOwnProperty(c)) {
        const cryptoPromise = await fetch(`http://localhost:8080/price/${c}`);
        const price = await cryptoPromise.json();
        //setAttribute(c, price);
        dispatch({ type: GET_CRYPTO, payload: { c, price } });
      }
    }
    setLoading(false);
  };

  //setAtribute

  const setLoading = (value) => dispatch({ type: SET_LOADING, payload: value });

  return (
    <CalculatorContext.Provider
      value={{
        crypto: state.crypto,
        loading: state.loading,
        fetchCrypto,
      }}
    >
      {props.children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorState;
