import { jokesLocalStorage, jokesService } from "services";
import { compare } from "utils";
import { toggleLoader, setError, clearError, uiComponents } from "./uiStateReducer";

// Action types
const ADD_JOKES = "jokesReducer/ADD_JOKES";
const SET_FAV_JOKES = "jokesReducer/SET_FAV_JOKES";
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
    case SET_FAV_JOKES:
      return [...action.payload.value];
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

const setFavouriteJokes = (jokes) => ({
  type: SET_FAV_JOKES,
  payload: { value: jokes },
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

const getJokeService = async (data, dispatch, service) => {
  dispatch(toggleLoader(uiComponents.JOKES_LIST_COMPONENT));

  try {
    dispatch(clearError(uiComponents.JOKES_LIST_COMPONENT));
    const jokeList = markFavJokes(await service(data));
    dispatch(addJokes(jokeList));
  } catch (e) {
    dispatch(addJokes([]));
    let component = uiComponents.JOKES_LIST_COMPONENT;
    if (e.status === jokesService.INTERNET_DISCONNECTED_ERROR) {
      component = uiComponents.APP_COMPONENT;
    }
    dispatch(setError(component, e));
  }
  dispatch(toggleLoader(uiComponents.JOKES_LIST_COMPONENT));
};

const getJokes = (state) => async (dispatch) => {
  switch (state.filterType) {
    case filterTypeSet.RANDOM:
      getJokeService(null, dispatch, jokesService.getRandomJoke.bind(jokesService));
      break;
    case filterTypeSet.CATEGORY:
      getJokeService(state.currentCategory, dispatch, jokesService.getJokeByCategory.bind(jokesService));
      break;
    case filterTypeSet.SEARCH:
      getJokeService(state.query, dispatch, jokesService.searchJoke.bind(jokesService));
      break;
    default:
      break;
  }
};

const toggleJokeLove = (joke = {}) => (dispatch) => {
  const favouriteJokes = jokesLocalStorage.getFavouriteJokes();
  let updatedFavJokeList = [];

  if (joke.loved) {
    updatedFavJokeList = favouriteJokes.filter((favJoke) => favJoke.id !== joke.id);
  } else {
    const favJoke = { ...joke, loved: true };
    updatedFavJokeList = [favJoke, ...favouriteJokes];
  }

  dispatch(setFavouriteJokes(updatedFavJokeList));

  dispatch(updateJokeField(joke.id, "loved", !joke.loved));
  jokesLocalStorage.addFavouriteJokes(updatedFavJokeList);
};

const loadFavouriteJokes = () => (dispatch) => {
  dispatch(toggleLoader(uiComponents.FAV_LIST_COMPONENT));
  const favouriteJokes = jokesLocalStorage.getFavouriteJokes();
  dispatch(setFavouriteJokes(favouriteJokes));
  dispatch(toggleLoader(uiComponents.FAV_LIST_COMPONENT));
};

export {
  jokesReducer as default,
  filterTypeSet,
  setFilterType,
  updateQueryString,
  toggleJokeLove,
  getJokes,
  loadFavouriteJokes,
  addJokes,
  setFavouriteJokes,
};
