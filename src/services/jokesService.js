const BASE_URL = "https://api.chucknorris.io/jokes/";
const RANDOM_JOKE_ENDPOINT = "random/";
const CATEGORIES_ENPOINT = "categories/";
const SEARCH_ENDPOINT = "search/";

const CATEGORY_PARAM = "?category";
const QUERY_PARAM = "?query";

const getResource = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Couldn't fetch by ${url}, received ${res.status}`);
  }

  return res.json();
};

const getJokeByCategory = async (category = "") => {
  return getRandomJoke(category);
};

const getRandomJoke = async (category) => {
  const params = category ? `${CATEGORY_PARAM}=${category}` : "";
  const joke = await getResource(`${BASE_URL}${RANDOM_JOKE_ENDPOINT}${params}`);
  return transformJoke(joke);
};

const getCategories = async () => {
  return getResource(`${BASE_URL}${CATEGORIES_ENPOINT}`);
};

const searchJoke = async (query) => {
  const params = query ? `${QUERY_PARAM}=${query}` : "";
  const res = getResource(`${BASE_URL}${SEARCH_ENDPOINT}${params}`);
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

export { getRandomJoke, getJokeByCategory, searchJoke, getCategories };
