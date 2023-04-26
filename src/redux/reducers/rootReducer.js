import layoutReducer from "./layout";
import { combineReducers } from "redux";
import todoReducer from "./todo";

const rootReducer = combineReducers({
  layout: layoutReducer,
  todo: todoReducer,
});

export default rootReducer;
