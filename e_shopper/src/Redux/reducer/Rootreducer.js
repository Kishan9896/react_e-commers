import { combineReducers } from "redux";
import { Adminreducer } from "./Adminreducer";
import { alertReducer } from "./alert.Reducer";
import { authReducer } from "./auth.Reducer";

export const Rootreducer = combineReducers({
  auth: authReducer,
  text: alertReducer,
  products:Adminreducer
});

export default Rootreducer;