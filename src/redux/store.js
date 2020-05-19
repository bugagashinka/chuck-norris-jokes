import { combineReducers, createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducers, jokesActions, categoriesActions } from "./reducers";

const state = combineReducers(reducers);
const store = createStore(state, applyMiddleware(thunkMiddleware));

export { store as default };
