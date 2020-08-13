import { GET_CRYPTO, GET_FIAT, SET_LOADING, CHANGE_FIAT } from "../types";

export default (state, action) => {
  const { key, title, price } = action.payload;

  switch (action.type) {
    case GET_CRYPTO:
      return {
        ...state,
        crypto: {
          ...state.crypto,
          [key]: {
            ...state.crypto[key],
            price: price["price"],
            title: title["title"],
          },
        },
      };
    case GET_FIAT:
      return { ...state, fiat: { ...state.fiat, [key]: price["price"] } };
    case CHANGE_FIAT:
      return { ...state, currentFiat: action.payload };
  }
};
