const BASE_URL = "https://api.chucknorris.io/jokes/";
const RANDOM_JOKE_ENDPOINT = "random/";
const CATEGORIES_ENPOINT = "categories/";
const SEARCH_ENDPOINT = "search/";

const CATEGORY_PARAM = "?category";
const QUERY_PARAM = "?query";

const CLIENT_ERROR__MIN_CODE = 400;
const CLIENT_ERROR__MAX_CODE = 499;
const INTERNET_DISCONNECTED_ERROR = "INTERNET_DISCONNECTED_ERROR";

const errorHandler = async (response) => {
  let error = new Error(`${response.status}: Something went wrong, result couln't be provided`);
  if (response.status >= CLIENT_ERROR__MIN_CODE && response.status <= CLIENT_ERROR__MAX_CODE) {
    error.originError = await response.json();
  }
  return Promise.reject(error);
};

const getResource = async (url) => {
  try {
    const res = await fetch(url, {
      headers: {
        "Accept-Language": "en-US;q=0.8",
      },
    });

    if (!res.ok) {
      // cases with 4xx/5xx status code
      return errorHandler(res);
    }
    return res.json();
  } catch (e) {
    // internet connection case
    console.error(e);
    throw new Error({ status: INTERNET_DISCONNECTED_ERROR });
  }
};

const getJokeByCategory = async (category = "") => {
  return getRandomJoke(category);
};

const getRandomJoke = async (category) => {
  const params = category ? `${CATEGORY_PARAM}=${category}` : "";
  const joke = await getResource(`${BASE_URL}${RANDOM_JOKE_ENDPOINT}${params}`);
  return [transformJoke(joke)];
};

const getCategories = async () => {
  return getResource(`${BASE_URL}${CATEGORIES_ENPOINT}`);
};

const searchJoke = async (query) => {
  const params = query ? `${QUERY_PARAM}=${query}` : "";
  if (!params) return;
  const res = await getResource(`${BASE_URL}${SEARCH_ENDPOINT}${params}`);
  return res.result.map(transformJoke);
};

const transformJoke = (joke) => {
  const { categories, created_at, icon_url, id, updated_at, url, value } = joke;
  return {
    categories,
    createdAt: created_at,
    iconUrl: icon_url,
    id,
    updatedAt: updated_at,
    url,
    value,
    loved: false,
  };
};

export { getRandomJoke, getJokeByCategory, searchJoke, getCategories, INTERNET_DISCONNECTED_ERROR };
