import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setFilterType, updateQueryString, toggleJokeLove, getJokes } from "redux/reducers/jokesReducer";
import { initCategories, selectCategory } from "redux/reducers/categoriesReducer";
import classNames from "classnames";

const FilterForm = (props) => {
  const { state, getJokes, selectCategory, updateQueryString, initCategories, setFilterType } = props;
  const inputNames = ["random", "category", "search"];

  useEffect(() => {
    initCategories();
  }, []);

  // Event handlers
  const getJokesHandler = () => {
    getJokes(state);
  };

  const clickCategoryHandler = (categoryName) => () => selectCategory(categoryName);

  const updateFilterType = (e) => {
    if (e.target.checked) {
      setFilterType(e.target.value);
    }
  };

  const updateSearchField = (e) => {
    updateQueryString(e.target.value);
  };

  // UI elements
  const categoryStyle = (categoryName) =>
    classNames({ button: true, "category__tag-btn": true, active: categoryName === state.currentCategory });

  const categoryElementList = state.categoryList.map((categoryName) => {
    return (
      <li className="category__tag category__list-item">
        <button className={categoryStyle(categoryName)} onClick={clickCategoryHandler(categoryName)} type="button">
          {categoryName}
        </button>
      </li>
    );
  });

  const [randomInput, categoryInput, searchInput] = inputNames.map((inputName) => {
    return (
      <input
        className={`radio-input form__${inputName}`}
        type="radio"
        id={`joke-${inputName}`}
        name="search"
        value={`${inputName}`}
        onChange={updateFilterType}
        defaultChecked={state.filterType === inputName.toUpperCase()}
      />
    );
  });

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

        <ul className="category__list">{categoryElementList}</ul>
      </div>

      <div className="text-search">
        <p>
          {searchInput}
          <label className="radio-label" htmlFor="joke-search">
            Search
          </label>
        </p>

        <input
          className="form__search-input"
          onChange={updateSearchField}
          type="text"
          value={state.query}
          placeholder="Free text search..."
        />
      </div>

      <button className="button form__search-btn" type="button" onClick={getJokesHandler}>
        Get a joke
      </button>
    </form>
  );
};

const mapStateToProps = ({ jokes, categories }) => {
  const { query, filterType, list: jokeList } = jokes;
  const { currentCategory, categories: categoryList } = categories;
  return {
    state: {
      filterType,
      categoryList,
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
  initCategories,
  selectCategory,
})(FilterForm);
