import categoriesReducer, { selectCategory, createCategoryList } from "./categoriesReducer";

// Categories list tests
test("Categories list should be empty", () => {
  // Initial state
  const state = {
    categories: [],
    currentCategory: "",
  };

  //   Action
  const action = { type: "NON_EXISTENT_TYPE" };

  // Calc newState
  const newState = categoriesReducer(state, action);

  //   Check result
  expect(newState.categories.length).toBe(0);
});

test("Categories list should containe 2 item", () => {
  // Initial state
  const state = {
    categories: [],
    currentCategory: "",
  };

  //   Action
  const action = createCategoryList(["movies", "society"]);

  // Calc newState
  const newState = categoriesReducer(state, action);

  //   Check result
  expect(newState.categories.length).toBe(2);
});

// Current category tests
test("Current category should be 'society'", () => {
  // Initial state
  const state = {
    categories: ["movies", "society"],
    currentCategory: "",
  };

  //   Action
  const action = selectCategory(state.categories[state.categories.length - 1]);

  // Calc newState
  const newState = categoriesReducer(state, action);

  //   Check result
  expect(newState.currentCategory).toBe("society");
});
