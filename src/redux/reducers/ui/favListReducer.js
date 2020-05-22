// Actions
const TOGGLE_FAV_LIST = "TOGGLE_FAV_LIST";

// Reducers
const favListReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_FAV_LIST:
      return { ...state, showOnMobile: !state.showOnMobile };
    default:
      return state;
  }
};

// Actions creators
const toggleFavList = () => ({ type: TOGGLE_FAV_LIST });

export { favListReducer as default, toggleFavList };
