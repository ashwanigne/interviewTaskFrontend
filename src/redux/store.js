import { createStore } from "redux";
import themeReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  themeReducer,
  composeWithDevTools()
  // other store enhancers if any
);
export default store;
