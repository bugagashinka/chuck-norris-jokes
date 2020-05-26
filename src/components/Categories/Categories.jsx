import React, { useEffect } from "react";
import classNames from "classnames";
import { initCategories, selectCategory } from "redux/reducers/categoriesReducer";
import { uiComponents } from "redux/reducers/uiStateReducer";
import { connect } from "react-redux";
import { Loader } from "ui";

const Categories = (props) => {
  const { show, isLoading, categories, initCategories, selectCategory, currentCategory } = props;

  useEffect(() => {
    if (show && !categories.length) {
      initCategories();
    }
  });

  const clickCategoryHandler = (categoryName) => () => selectCategory(categoryName);

  const showCategories = () => {
    const categoryStyle = (categoryName) =>
      classNames({ button: true, "category__tag-btn": true, active: categoryName === currentCategory });

    const categoryElementList = categories.map((categoryName) => {
      return (
        <li key={categoryName} className="category__tag category__list-item">
          <button className={categoryStyle(categoryName)} onClick={clickCategoryHandler(categoryName)} type="button">
            {categoryName}
          </button>
        </li>
      );
    });

    return isLoading ? <Loader /> : <ul className="category__list">{categoryElementList}</ul>;
  };

  return showCategories();
};

const mapStateToProps = ({ categories: { categories, currentCategory }, uiState }) => ({
  categories,
  currentCategory,
  isLoading: uiState.loading[uiComponents.CATEGORY_LIST_COMPONENT],
});

export default connect(mapStateToProps, {
  initCategories,
  selectCategory,
})(Categories);
