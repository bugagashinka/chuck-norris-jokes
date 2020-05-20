import React from "react";
import { connect } from "react-redux";
import { setFilterType, updateQueryString, toggleJokeLove, getJokes } from "redux/reducers/jokesReducer";

const FilterForm = (props) => {
  const { state, getJokes } = props;
  const inputNames = ["random", "category", "search"];

  const [randomInput, categoryInput, searchInput] = inputNames.map((inputName) => {
    return (
      <input
        className={`radio-input form__${inputName}`}
        type="radio"
        id={`joke-${inputName}`}
        name="search"
        value={`${inputName}`}
        defaultChecked={state.filterType === inputName.toUpperCase()}
      />
    );
  });

  const getJokesHandler = () => {
    getJokes(state);
  };

  return (
    <form className="filter-form form">
      <p>
        {randomInput}
        <label className="radio-label" htmlFor="joke-random">
          Random
        </label>
      </p>

      <div className="category">
        {categoryInput}
        <label className="radio-label" htmlFor="joke-category">
          From caterogies
        </label>

        <ul className="category__list">
          <li className="category__tag category__list-item">
            <a href="#" className="category__tag-link">
              animal
            </a>
          </li>
          <li className="category__tag category__list-item">
            <a href="#" className="category__tag-link">
              career
            </a>
          </li>
          <li className="category__tag category__list-item">
            <a href="#" className="category__tag-link">
              celebrity
            </a>
          </li>
          <li className="category__tag category__list-item">
            <a href="#" className="category__tag-link active">
              dev
            </a>
          </li>
        </ul>
      </div>

      <div className="text-search">
        <p>
          {searchInput}
          <label className="radio-label" htmlFor="joke-search">
            Search
          </label>
        </p>

        <input type="text" className="form__search-input" name="" placeholder="Free text search..." />
      </div>

      <button className="button form__search-btn" type="button" onClick={getJokesHandler}>
        Get a joke
      </button>
    </form>
  );
};

const mapStateToProps = ({ jokes, categories }) => {
  const { query, filterType, list: jokeList } = jokes;
  const { currentCategory } = categories;
  return {
    state: {
      filterType,
      query,
      currentCategory,
      jokeList,
    },
  };
};

export default connect(mapStateToProps, {
  setFilterType,
  updateQueryString,
  toggleJokeLove,
  getJokes,
})(FilterForm);
