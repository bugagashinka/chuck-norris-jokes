const SET_ERROR = "uiStateReducer/SET_ERROR";
const CLEAR_ERROR = "uiStateReducer/CLEAR_ERROR";
const TOGGLE_LOADER = "uiStateReducer/TOGGLE_LOADER";
const TOGGLE_FAV_LIST = "uiStateReducer/TOGGLE_FAV_LIST";

const uiComponents = {
  APP_COMPONENT: "appComponent",
  FAV_LIST_COMPONENT: "favListComponent",
  JOKES_LIST_COMPONENT: "jokesListComponent",
  CATEGORY_LIST_COMPONENT: "categoryListComponent",
};

const componentsUIState = {
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

// Reducers

const error = (state, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, [action.component]: action.error };
    case CLEAR_ERROR:
      return { ...state, [action.component]: null };
    default:
      return state;
  }
};

const loading = (state, action) => {
  switch (action.type) {
    case TOGGLE_LOADER:
      return { ...state, [action.component]: !state[action.component] };
    default:
      return state;
  }
};

const favListComponentState = (state, action) => {
  debugger;
  switch (action.type) {
    case TOGGLE_FAV_LIST:
      return { ...state, showOnMobile: !state.showOnMobile };
    default:
      return state;
  }
};

const uiState = (state = componentsUIState, action) => {
  return {
    [uiComponents.FAV_LIST_COMPONENT]: favListComponentState(state[uiComponents.FAV_LIST_COMPONENT], action),
    error: error(state.error, action),
    loading: loading(state.loading, action),
  };
};

// Actions creators
const setError = (componentName, error) => ({ type: SET_ERROR, component: componentName, error });

const clearError = (componentName) => ({ type: CLEAR_ERROR, component: componentName });

const toggleLoader = (componentName) => ({ type: TOGGLE_LOADER, component: componentName });

const toggleFavList = () => ({ type: TOGGLE_FAV_LIST });

export { uiState as default, setError, toggleLoader, toggleFavList, uiComponents, clearError };
