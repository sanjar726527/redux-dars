import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// const customMiddleware = (store) => (next) => (action) => {
//   console.log("Middleware triggered:", action);
//   next(action);
// };

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const dispatch = store.dispatch;
export { dispatch };

export default store;
