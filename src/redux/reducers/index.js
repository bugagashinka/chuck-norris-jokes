import { default as jokes, actions as jokesActions } from "./jokesReducer";
import { default as categories, actions as categoriesActions } from "./categoriesReducer";

const reducers = {
  jokes,
  categories,
};

export { reducers, jokesActions, categoriesActions };
