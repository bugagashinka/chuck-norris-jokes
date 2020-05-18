const FAV_JOKES_KEY = "FAV_JOKES";

const addFavouriteJokes = (jokes) => localStorage.setItem(FAV_JOKES_KEY, formatJokes(jokes));

const getFavouriteJokes = () => formatJokes(localStorage.getItem(FAV_JOKES_KEY));

const clear = () => localStorage.clear();

const formatJokes = (jokes) => {
  try {
    return JSON.parse(jokes);
  } catch (e) {
    return JSON.stringify(jokes);
  }
};

export { addFavouriteJokes, getFavouriteJokes };
