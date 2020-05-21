import { jokesService } from "services";

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
  if (action.type === UPDATE_CURRENT_CATEGORY) return action.payload.value;
  return state;
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
  const list = await jokesService.getCategories();
  dispatch(createCategoryList(list));
  const firstCategory = list.length && list[0];
  if (firstCategory) {
    dispatch(selectCategory(firstCategory));
  }
};

export { categoriesReducer as default, initCategories, selectCategory };
