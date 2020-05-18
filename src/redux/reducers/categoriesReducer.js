const CREATE_CATEGORY_LIST = "categoriesReducer/CREATE_CATEGORY_LIST";
const UPDATE_CURRENT_CATEGORY = "categoriesReducer/UPDATE_CURRENT_CATEGORY";

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

const createCategoryList = (list) => ({
  type: CREATE_CATEGORY_LIST,
  payload: { value: list },
});

const selectCategory = (categoryName) => ({
  type: UPDATE_CURRENT_CATEGORY,
  payload: { value: categoryName },
});

const state = {
  list: categories,
  currentCategory,
};

const actions = {
  selectCategory,
  createCategoryList,
};

export { state as default, actions as categoriesActions };
