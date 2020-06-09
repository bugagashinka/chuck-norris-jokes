import { jokesService } from "services";
import { toggleLoader, uiComponents, setError } from "./uiStateReducer";

// Actions types
const CREATE_CATEGORY_LIST = "categoriesReducer/CREATE_CATEGORY_LIST";
const UPDATE_CURRENT_CATEGORY = "categoriesReducer/UPDATE_CURRENT_CATEGORY";

// Categories reducers
const initialState = {
  categories: [],
  currentCategory: "",
};

const categories = (state = initialState.categories, action) => {
  switch (action.type) {
    case CREATE_CATEGORY_LIST:
      return [...action.payload.value];
    default:
      return state;
  }
};

const currentCategory = (state = initialState.currentCategory, action) => {
  return action.type === UPDATE_CURRENT_CATEGORY ? action.payload.value : state;
};

const categoriesReducer = (state = initialState, action) => {
  return {
    categories: categories(state.categories, action),
    currentCategory: currentCategory(state.currentCategory, action),
  };
};

// Actions creators
const createCategoryList = (list) => ({
  type: CREATE_CATEGORY_LIST,
  payload: { value: list },
});

const selectCategory = (categoryName) => ({
  type: UPDATE_CURRENT_CATEGORY,
  payload: { value: categoryName },
});

// Thunk creators
const initCategories = () => async (dispatch) => {
  try {
    const list = await jokesService.getCategories();
    dispatch(createCategoryList(list));
    const firstCategory = list.length && list[0];
    if (firstCategory) {
      dispatch(selectCategory(firstCategory));
    }
    dispatch(toggleLoader(uiComponents.CATEGORY_LIST_COMPONENT));
  } catch (e) {
    if (e.status === jokesService.INTERNET_DISCONNECTED_ERROR) {
      dispatch(setError(uiComponents.APP_COMPONENT, e));
    }
  }
};

export { categoriesReducer as default, initCategories, selectCategory, createCategoryList };
