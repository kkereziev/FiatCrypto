import { GET_CRYPTO, GET_FIAT, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_CRYPTO:
      let key = action.payload.c;
      let value = action.payload.value;
      return {
        ...state,
        crypto: { ...crypto, [key]: { ...crypto[key], price: value["price"] } },
      };
    case GET_FIAT:
      return { ...state };
    case SET_LOADING:
      return { ...state, loading: action.payload };
  }
};
