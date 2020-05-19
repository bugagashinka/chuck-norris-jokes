import React from "react";

const FilterForm = () => {
  return (
    <form className="form">
      <p>
        <input className="radio-input form__random" type="radio" id="joke-random" name="search" value="random" />
        <label className="radio-label" htmlFor="joke-random">
          Random
        </label>
      </p>

      <div className="category">
        <input className="radio-input form__category" type="radio" id="joke-category" name="search" value="category" />
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
          <input className="radio-input form__search" type="radio" id="joke-search" name="search" value="keyword" />
          <label className="radio-label" htmlFor="joke-search">
            Search
          </label>
        </p>

        <input type="text" className="form__search-input" name="" placeholder="Free text search..." />
      </div>

      <button className="form__search-btn">Get a joke</button>
    </form>
  );
};

export default FilterForm;
