import React, { useReducer } from "react";
import CalculatorContext from "./calculatorContext";
import CalculatorReducer from "./calculatorReducer";

import { GET_CRYPTO, GET_FIAT, SET_LOADING } from "../types";

const CalculatorState = (props) => {
  const initialState = {
    crypto: {},
    loading: false,
    fiat: {},
  };

  const [state, dispatch] = useReducer(CalculatorReducer, initialState);

  //fetch crypto
  const fetchCrypto = async (title, key) => {
    const cryptoPromise = await fetch(`http://localhost:8080/price/${key}`);
    const price = await cryptoPromise.json();
    //setAttribute(c, price);
    dispatch({ type: GET_CRYPTO, payload: { title, price, key } });
  };

  //setAtribute

  const setLoading = (value) => dispatch({ type: SET_LOADING, payload: value });

  return (
    <CalculatorContext.Provider
      value={{
        crypto: state.crypto,
        loading: state.loading,
        fiat: state.fiat,
        fetchCrypto,
      }}
    >
      {props.children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorState;
