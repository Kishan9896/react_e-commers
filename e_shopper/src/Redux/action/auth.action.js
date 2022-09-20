import { GOOGLELOG } from "../Actiontype";

export const googleauth = () => (dispatch) => {
  dispatch({ type: GOOGLELOG });
};
