import { combineReducers, createStore } from "redux";
import { jokes, categories } from "./reducers";

const state = combineReducers({
  jokes,
  categories,
});
const store = createStore(state);

export { store as default };
