import { jokesLocalStorage, jokesService } from "services";
import { compare } from "utils";

// Action types
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

// Jokes reducers
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

// Action creators
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

// Thunk creators
const markFavJokes = (jokes) => {
  const favouriteJokes = jokesLocalStorage.getFavouriteJokes();
  const intersection = new Set(compare.intersectionBy(favouriteJokes, jokes, "id"));

  return jokes.map((joke) => {
    if (intersection.has(joke.id)) joke.loved = true;
    return joke;
  });
};

const getJokes = (state) => async (dispatch) => {
  switch (state.filterType) {
    case filterTypeSet.RANDOM:
      const randomJokes = markFavJokes([await jokesService.getRandomJoke()]);
      dispatch(addJokes(randomJokes));
      break;
    case filterTypeSet.CATEGORY:
      const categorizedJokes = markFavJokes([await jokesService.getJokeByCategory(state.currentCategory)]);
      dispatch(addJokes(categorizedJokes));
      break;
    case filterTypeSet.SEARCH:
      const searchedJokes = await markFavJokes(jokesService.searchJoke(state.query));
      dispatch(addJokes(searchedJokes));
      break;
    default:
      break;
  }
};

const toggleJokeLove = (joke) => (dispatch) => {
  const favouriteJokes = jokesLocalStorage.getFavouriteJokes();
  const isLove = favouriteJokes.some((favJoke) => favJoke.id === joke.id);

  let updatedFavJokeList = [];
  if (isLove) {
    updatedFavJokeList = favouriteJokes.filter((favJoke) => favJoke.id !== joke.id);
    dispatch(removeFavouriteJoke(joke.id));
  } else {
    updatedFavJokeList = [...favouriteJokes, joke];
    dispatch(addFavouriteJokes([joke]));
  }
  jokesLocalStorage.addFavouriteJokes(updatedFavJokeList);
};

const loadFavouriteJokes = () => (dispatch) => {
  const favouriteJokes = jokesLocalStorage.getFavouriteJokes();
  dispatch(addFavouriteJokes(favouriteJokes));
};

const state = {
  query,
  filterType,
  list: jokeList,
  favourites,
};

const actions = {
  setFilterType,
  updateQueryString,
  toggleJokeLove,
  getJokes,
  loadFavouriteJokes,
};

export { state, actions };