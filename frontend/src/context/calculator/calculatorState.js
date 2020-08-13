import React, { useReducer } from "react";
import CalculatorContext from "./calculatorContext";
import CalculatorReducer from "./calculatorReducer";

import { GET_CRYPTO, GET_FIAT, SET_LOADING, CHANGE_FIAT } from "../types";

const CalculatorState = (props) => {
  const initialState = {
    crypto: {},
    loading: false,
    fiat: {},
    currentFiat: "USD",
  };

  const [state, dispatch] = useReducer(CalculatorReducer, initialState);

  //fetch
  const fetchCurrency = async (key, type) => {
    const cryptoPromise = await fetch(`http://localhost:8080/${type}/${key}`);
    const price = await cryptoPromise.json();
    return price;
  };

  //fetch crypto
  const fetchCrypto = async (title, key) => {
    const price = await fetchCurrency(key, "price");
    //setAttribute(c, price);
    dispatch({ type: GET_CRYPTO, payload: { title, price, key } });
  };

  //fetch fiat
  const fetchFiat = async (key) => {
    const price = await fetchCurrency(key, "fiat");
    dispatch({ type: GET_FIAT, payload: { key, price } });
  };

  const changeFiat = (value) => {
    dispatch({ type: CHANGE_FIAT, payload: value });
  };
  const setLoading = (value) => dispatch({ type: SET_LOADING, payload: value });

  return (
    <CalculatorContext.Provider
      value={{
        crypto: state.crypto,
        loading: state.loading,
        fiat: state.fiat,
        currentFiat: state.currentFiat,
        fetchCrypto,
        fetchFiat,
        changeFiat,
      }}
    >
      {props.children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorState;
