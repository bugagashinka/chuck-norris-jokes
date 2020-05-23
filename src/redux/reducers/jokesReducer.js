import { jokesLocalStorage, jokesService } from "services";
import { compare } from "utils";

// Action types
const ADD_JOKES = "jokesReducer/ADD_JOKES";
const ADD_FAV_JOKES = "jokesReducer/ADD_FAV_JOKES";
const REMOVE_FAV_JOKE = "jokesReducer/REMOVE_FAV_JOKE";
const UPDATE_QUERY_STRING = "jokesReducer/UPDATE_QUERY_STRING";
const SET_FILTER_TYPE = "jokesReducer/SET_FILTER_TYPE";
const UPDATE_JOKE_FIELD = "jokesReducer/UPDATE_JOKE_FIELD";
const filterTypeSet = {
  RANDOM: "RANDOM",
  CATEGORY: "CATEGORY",
  SEARCH: "SEARCH",
};

// Jokes reducers
const initialState = {
  query: "",
  filterType: filterTypeSet.RANDOM,
  list: [],
  favourites: [],
};

const query = (state = initialState.query, action) => {
  switch (action.type) {
    case UPDATE_QUERY_STRING:
      return action.payload.value;
    default:
      return state;
  }
};

const filterType = (state = initialState.filterType, action) => {
  switch (action.type) {
    case SET_FILTER_TYPE:
      return action.payload.value;
    default:
      return state;
  }
};

const jokeList = (state = initialState.list, action) => {
  switch (action.type) {
    case ADD_JOKES:
      return [...action.payload.value];
    case UPDATE_JOKE_FIELD:
      const { jokeId, field, value } = action.payload.value;
      return state.map((item) => {
        if (item.id === jokeId) {
          return { ...item, [field]: value };
        }
        return item;
      });
    default:
      return state;
  }
};

const favourites = (state = initialState.favourites, action) => {
  switch (action.type) {
    case ADD_FAV_JOKES:
      return [...state, ...action.payload.value];
    case REMOVE_FAV_JOKE:
      return state.filter(({ id }) => id !== action.payload.value);
    default:
      return state;
  }
};

const jokesReducer = (state = initialState, action) => {
  return {
    query: query(state.query, action),
    filterType: filterType(state.filterType, action),
    list: jokeList(state.list, action),
    favourites: favourites(state.favourites, action),
  };
};

// Action creators
const updateQueryString = (searchText) => ({
  type: UPDATE_QUERY_STRING,
  payload: { value: searchText },
});

const setFilterType = (filter) => ({
  type: SET_FILTER_TYPE,
  payload: { value: filter.toUpperCase() },
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

const updateJokeField = (jokeId, field, value) => ({
  type: UPDATE_JOKE_FIELD,
  payload: { value: { jokeId, field, value } },
});

// Thunk creators
const markFavJokes = (jokes = []) => {
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
      const searchedJokes = markFavJokes(await jokesService.searchJoke(state.query));
      dispatch(addJokes(searchedJokes));
      break;
    default:
      break;
  }
};

const toggleJokeLove = (joke = {}) => (dispatch) => {
  const favouriteJokes = jokesLocalStorage.getFavouriteJokes();
  const loved = favouriteJokes.some((favJoke) => favJoke.id === joke.id);

  let updatedFavJokeList = [];
  if (loved) {
    updatedFavJokeList = favouriteJokes.filter((favJoke) => favJoke.id !== joke.id);
    dispatch(removeFavouriteJoke(joke.id));
  } else {
    const favJoke = { ...joke, loved: true };
    updatedFavJokeList = [...favouriteJokes, favJoke];
    dispatch(addFavouriteJokes([favJoke]));
  }
  dispatch(updateJokeField(joke.id, "loved", !loved));
  jokesLocalStorage.addFavouriteJokes(updatedFavJokeList);
};

const loadFavouriteJokes = () => (dispatch) => {
  const favouriteJokes = jokesLocalStorage.getFavouriteJokes();
  dispatch(addFavouriteJokes(favouriteJokes));
};

export { jokesReducer as default, setFilterType, updateQueryString, toggleJokeLove, getJokes, loadFavouriteJokes };
