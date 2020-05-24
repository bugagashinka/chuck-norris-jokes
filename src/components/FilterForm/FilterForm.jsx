import React from "react";
import { connect } from "react-redux";
import { setFilterType, updateQueryString, toggleJokeLove, getJokes } from "redux/reducers/jokesReducer";
import classNames from "classnames";
import Categories from "components/Categories";

const ENTER_KEY_CODE = "Enter";

const FilterForm = (props) => {
  const { state, getJokes, updateQueryString, setFilterType } = props;
  const inputElementConfigs = [
    { name: "random", label: "Random" },
    { name: "category", label: "From caterogies" },
    { name: "search", label: "Search" },
  ];

  // Event handlers
  const getJokesHandler = () => {
    getJokes(state);
  };

  const updateFilterType = (e) => {
    if (e.target.checked) {
      setFilterType(e.target.value);
    }
  };

  const updateSearchField = (e) => {
    updateQueryString(e.target.value);
  };

  const keyPressHandler = (e) => {
    if (e.key === ENTER_KEY_CODE) {
      getJokes(state);
      e.preventDefault();
    }
  };

  // UI elements

  const [randomInput, categoryInput, searchInput] = inputElementConfigs.map(({ name, label }) => {
    const inputId = `joke-${name}`;
    return (
      <>
        <input
          className={`radio-input form__${name}`}
          type="radio"
          id={inputId}
          name="search"
          value={`${name}`}
          onChange={updateFilterType}
          defaultChecked={state.filterType === name.toUpperCase()}
        />
        <label className="radio-label" htmlFor={inputId}>
          {label}
        </label>
      </>
    );
  });

  const isActiveFilter = (name) => name.toUpperCase() === state.filterType;

  const styleFilterType = (mainClass, ...classList) =>
    classNames(mainClass, ...classList, "filter-type", {
      active: isActiveFilter(mainClass),
    });

  return (
    <form className="filter-form form">
      <p className={styleFilterType("random")}>{randomInput}</p>

      <div className={styleFilterType("category")}>
        {categoryInput}
        <Categories show={isActiveFilter("category")} />
      </div>

      <div className={styleFilterType("search")}>
        <p>{searchInput}</p>

        <input
          className="form__search-input"
          onKeyDown={keyPressHandler}
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

const mapStateToProps = ({ jokes }) => {
  const { query, filterType, list: jokeList } = jokes;
  return {
    state: {
      filterType,
      query,
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
