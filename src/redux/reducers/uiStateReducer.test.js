import uiState, { setError, toggleLoader, toggleFavList, uiComponents, clearError } from "./uiStateReducer";

const initialState = {
  [uiComponents.FAV_LIST_COMPONENT]: {
    showOnMobile: false,
  },
  error: {
    [uiComponents.APP_COMPONENT]: null,
    [uiComponents.FAV_LIST_COMPONENT]: null,
    [uiComponents.JOKES_LIST_COMPONENT]: null,
    [uiComponents.CATEGORY_LIST_COMPONENT]: null,
  },
  loading: {
    [uiComponents.FAV_LIST_COMPONENT]: false,
    [uiComponents.JOKES_LIST_COMPONENT]: false,
    [uiComponents.CATEGORY_LIST_COMPONENT]: true,
  },
};

// Set error test
test("Set App component error", () => {
  const error = new Error();

  //   Action
  const action = setError(uiComponents.APP_COMPONENT, error);

  //   Calc new state
  let newState = uiState(initialState, action);

  //   Check result
  expect(newState.error[uiComponents.APP_COMPONENT]).toBe(error);
});

test("Set FavList component error", () => {
  const error = new Error();

  //   Action
  const action = setError(uiComponents.FAV_LIST_COMPONENT, error);

  //   Calc new state
  let newState = uiState(initialState, action);

  //   Check result
  expect(newState.error[uiComponents.FAV_LIST_COMPONENT]).toBe(error);
});

test("Set JokesList component error", () => {
  const error = new Error();

  //   Action
  const action = setError(uiComponents.JOKES_LIST_COMPONENT, error);

  //   Calc new state
  let newState = uiState(initialState, action);

  //   Check result
  expect(newState.error[uiComponents.JOKES_LIST_COMPONENT]).toBe(error);
});

test("Set Categories component error", () => {
  const error = new Error();

  //   Action
  const action = setError(uiComponents.CATEGORY_LIST_COMPONENT, error);

  //   Calc new state
  let newState = uiState(initialState, action);

  //   Check result
  expect(newState.error[uiComponents.CATEGORY_LIST_COMPONENT]).toBe(error);
});

// Remove error tests
test("Remove App component error", () => {
  // Initial state
  const initialState = {
    error: {
      [uiComponents.APP_COMPONENT]: new Error(),
    },
  };

  //   Action
  const action = clearError(uiComponents.APP_COMPONENT);

  //   Calc new state
  let newState = uiState(initialState, action);

  //   Check result
  expect(newState.error[uiComponents.APP_COMPONENT]).toBeNull();
});

test("Remove FavList component error", () => {
  // Initial state
  const initialState = {
    error: {
      [uiComponents.FAV_LIST_COMPONENT]: new Error(),
    },
  };

  //   Action
  const action = clearError(uiComponents.FAV_LIST_COMPONENT);

  //   Calc new state
  let newState = uiState(initialState, action);

  //   Check result
  expect(newState.error[uiComponents.FAV_LIST_COMPONENT]).toBeNull();
});

test("Remove JokesList component error", () => {
  // Initial state
  const initialState = {
    error: {
      [uiComponents.JOKES_LIST_COMPONENT]: new Error(),
    },
  };

  //   Action
  const action = clearError(uiComponents.JOKES_LIST_COMPONENT);

  //   Calc new state
  let newState = uiState(initialState, action);

  //   Check result
  expect(newState.error[uiComponents.JOKES_LIST_COMPONENT]).toBeNull();
});

test("Remove Categories component error", () => {
  // Initial state
  const initialState = {
    error: {
      [uiComponents.CATEGORY_LIST_COMPONENT]: new Error(),
    },
  };

  //   Action
  const action = clearError(uiComponents.CATEGORY_LIST_COMPONENT);

  //   Calc new state
  let newState = uiState(initialState, action);

  //   Check result
  expect(newState.error[uiComponents.CATEGORY_LIST_COMPONENT]).toBeNull();
});

// Toggle FavList component visability on mobile
test("Toggle FavList", () => {
  // Action
  const action = toggleFavList();

  //   Calc new state
  let newState = uiState(initialState, action);

  //   Check result
  expect(newState[uiComponents.FAV_LIST_COMPONENT].showOnMobile).toBeTruthy();
  newState = uiState(newState, action);
  expect(newState[uiComponents.FAV_LIST_COMPONENT].showOnMobile).toBeFalsy();
});

// Toggle loader indicator test
test("Toggle loader indicator for FavList component", () => {
  // Action
  const action = toggleLoader(uiComponents.FAV_LIST_COMPONENT);

  //   Calc new state
  let newState = uiState(initialState, action);

  //   Check result
  expect(newState.loading[uiComponents.FAV_LIST_COMPONENT]).toBeTruthy();
  newState = uiState(newState, action);
  expect(newState.loading[uiComponents.FAV_LIST_COMPONENT]).toBeFalsy();
});

test("Toggle loader indicator for JokesList component", () => {
  // Action
  const action = toggleLoader(uiComponents.JOKES_LIST_COMPONENT);

  //   Calc new state
  let newState = uiState(initialState, action);

  //   Check result
  expect(newState.loading[uiComponents.JOKES_LIST_COMPONENT]).toBeTruthy();
  newState = uiState(newState, action);
  expect(newState.loading[uiComponents.JOKES_LIST_COMPONENT]).toBeFalsy();
});

test("Toggle loader indicator for Categories component", () => {
  // Action
  const action = toggleLoader(uiComponents.CATEGORY_LIST_COMPONENT);

  //   Calc new state
  let newState = uiState(initialState, action);

  //   Check result
  expect(newState.loading[uiComponents.CATEGORY_LIST_COMPONENT]).toBeFalsy();
  newState = uiState(newState, action);
  expect(newState.loading[uiComponents.CATEGORY_LIST_COMPONENT]).toBeTruthy();
});
