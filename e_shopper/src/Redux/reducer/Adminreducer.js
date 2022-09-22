import * as actionType from "../Actiontype"

const intival = {
  isLoding: false,
  product: [],
  error: "",
};

export const Adminreducer = (state = intival, action) => {
  switch (action.type) {
    case actionType.READ_PRODUCTS:
      return {
        ...state,
        product: action.payload,
        isLoding: false,
        error: "",
      };
    case actionType.ADD_PRODUCT:
      return {
        ...state,
        product: state.product.concat(action.payload),
        isLoding: false,
        error: "",
      };
    case actionType.EDIT_PRODUCTS:
        return {
          ...state,
          product: state.product.map((p) => {
            if (p.id === action.payload.id) {
                return action.payload
            } else {
                return p
            }
          }),
          isLoding: false,
          error: "",
        };
    case actionType.DELETE_PRODUCTS:
        return {
          ...state,
          product: state.product.filter((m)=>m.id !== action.payload),
          isLoding: false,
          error: "",
        };
    case actionType.LOADING_PRODUCTS:
      return { ...state, isLoding: true, error: "" };
    case actionType.ERROR_PRODUCTS:
      return {
        ...state,
        isLoding: false,
        product: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
