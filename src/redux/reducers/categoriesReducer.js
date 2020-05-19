import { jokesService } from "services";

// Actions types
const CREATE_CATEGORY_LIST = "categoriesReducer/CREATE_CATEGORY_LIST";
const UPDATE_CURRENT_CATEGORY = "categoriesReducer/UPDATE_CURRENT_CATEGORY";

// Categories reducers
const categories = (state = [], action) => {
  switch (action.type) {
    case CREATE_CATEGORY_LIST:
      return [...action.payload.value];
    default:
      return state;
  }
};

const currentCategory = (state = "", action) => {
  if (action.type === UPDATE_CURRENT_CATEGORY) return action.payload.value;
  return state;
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
  const list = jokesService.getCategories();
  dispatch(createCategoryList(list));

  const firstCategory = list.length && list[0];
  if (firstCategory) {
    dispatch(selectCategory(firstCategory));
  }
};

const state = {
  list: categories,
  currentCategory,
};

const actions = {
  initCategories,
  selectCategory,
};

export { state, actions };
