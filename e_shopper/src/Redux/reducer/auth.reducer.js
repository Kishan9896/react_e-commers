import * as Actiontype from "../Actiontype";

const initval = {
  value: null,
  error: "",
};

export const authReducer = (state = initval, action) => {
  switch (action.type) {
    case Actiontype.SIGNED_IN:
      return {
        ...state,
        value: action.payload,
        error: "",
      };
    case Actiontype.LOGGED_OUT:
      return {
        ...state,
        value: null,
        error: "",
      };
    default:
      return state;
  }
};
