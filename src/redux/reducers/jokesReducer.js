const ADD_JOKES = "jokesReducer/ADD_JOKES";
const ADD_FAV_JOKES = "jokesReducer/ADD_FAV_JOKES";
const REMOVE_FAV_JOKE = "jokesReducer/REMOVE_FAV_JOKE";
const UPDATE_QUERY_STRING = "jokesReducer/UPDATE_QUERY_STRING";
const SET_FILTER_TYPE = "jokesReducer/SET_FILTER_TYPE";
const filterTypeSet = {
  RANDOM: "RANDOM",
  CATEGORY: "CATEGORY",
  SEARCH: "SEARCH",
};

const query = (state = "", action) => {
  switch (action.type) {
    case UPDATE_QUERY_STRING:
      return action.payload.value;
    default:
      return state;
  }
};

const filterType = (state = filterTypeSet.RANDOM, action) => {
  switch (action.type) {
    case SET_FILTER_TYPE:
      return action.payload.value;
    default:
      return state;
  }
};

const jokeList = (state = [], action) => {
  switch (action.type) {
    case ADD_JOKES:
      return [...action.payload.value];
    default:
      return state;
  }
};

const favourites = (state = [], action) => {
  switch (state.type) {
    case ADD_FAV_JOKES:
      return [...state, ...action.payload.value];
    case REMOVE_FAV_JOKE:
      return state.filter(({ id }) => id !== action.payload.value);
    default:
      return state;
  }
};

const updateQueryString = (searchText) => ({
  type: UPDATE_QUERY_STRING,
  payload: { value: searchText },
});

const setFilterType = (filter) => ({
  type: SET_FILTER_TYPE,
  payload: { value: filter },
});

const addJokes = (jokes) => ({
  type: ADD_JOKES,
  payload: { value: jokes },
});

const addFavouriteJokes = (jokes) => ({
  type: ADD_FAV_JOKES,
  payload: { value: jokes },
});

const removeFavouriteJoke = (id) => ({
  type: REMOVE_FAV_JOKE,
  payload: { value: id },
});

const state = {
  query,
  filterType,
  list: jokeList,
  favourites,
};

const actions = {
  setFilterType,
  updateQueryString,
  removeFavouriteJoke,
  addFavouriteJokes,
  addJokes,
};

export { state as default, actions as jokesActions };
