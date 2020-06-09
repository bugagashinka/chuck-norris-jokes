import jokesReducer, {
  setFilterType,
  updateQueryString,
  addJokes,
  setFavouriteJokes,
  filterTypeSet,
} from "./jokesReducer";

const initialSate = {
  query: "",
  filterType: filterTypeSet.RANDOM,
  list: [],
  favourites: [],
};

test("Update query text", () => {
  // Action
  const action = updateQueryString("entered some text");

  // Calc new state
  const newState = jokesReducer(initialSate, action);

  // Check result
  expect(newState.query).toBe("entered some text");
});

test("Change filter type ", () => {
  // Action
  const action = setFilterType(filterTypeSet.CATEGORY);

  // Calc new state
  const newState = jokesReducer(initialSate, action);

  // Check result
  expect(newState.filterType).toBe(filterTypeSet.CATEGORY);
});

test("Add jokes into jokes list", () => {
  const dummyJoke = { text: "blabla" };
  const dummyJokeList = [dummyJoke];
  // Action
  const action = addJokes(dummyJokeList);

  // Calc new state
  const newState = jokesReducer(initialSate, action);

  // Check result
  expect(newState.list.length).toBe(1);
  expect(newState.list[0]).toBe(dummyJoke);
});

test("Clear jokes list after add new jokes", () => {
  // Initial state
  const initialSate = {
    list: [{ text: "bla bla bla" }],
  };

  const dummyJokeList = [{ text: "foo foo" }, { text: "baz baz" }];
  // Action
  const action = addJokes(dummyJokeList);

  // Calc new state
  const newState = jokesReducer(initialSate, action);

  // Check result
  expect(newState.list.length).toBe(2);
  expect(newState.list[0].text).toBe("foo foo");
});

test("Clear jokes list", () => {
  const dummyJokeList = [];
  // Action
  const action = addJokes(dummyJokeList);

  // Calc new state
  const newState = jokesReducer(initialSate, action);

  // Check result
  expect(newState.list.length).toBe(0);
});

test("Set jokes into favourites list", () => {
  const dummyFavJokeList = [{ text: "bla bla" }];
  // Action
  const action = setFavouriteJokes(dummyFavJokeList);

  // Calc new state
  const newState = jokesReducer(initialSate, action);

  // Check result
  expect(newState.favourites.length).toBe(1);
  expect(newState.favourites[0].text).toBe("bla bla");
});

test("Replace jokes in favourites list", () => {
  const initialFavJokeList = [{ text: "bla bla" }];
  const dummyFavJokeList = [{ text: "new new" }, { text: "more new" }];
  // Action
  const action = setFavouriteJokes(dummyFavJokeList);

  // Calc new state
  const newState = jokesReducer(initialFavJokeList, action);

  // Check result
  expect(newState.favourites.length).toBe(2);
  expect(newState.favourites[1].text).toBe("more new");
});
