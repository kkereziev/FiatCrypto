import { GET_CRYPTO, GET_FIAT, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_CRYPTO:
      const { key, title, price } = action.payload;
      console.log(key);
      console.log();
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
    case SET_LOADING:
      return { ...state, loading: action.payload };
  }
};
