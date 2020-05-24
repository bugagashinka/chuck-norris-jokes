import React, { useEffect } from "react";
import JokeCard from "components/JokeCard";
import { connect } from "react-redux";
import { loadFavouriteJokes } from "redux/reducers/jokesReducer";
import { toggleFavList, uiComponents } from "redux/reducers/uiStateReducer";
import classNames from "classnames";
import { Loader } from "ui";

const FavList = (props) => {
  const { state, loadFavouriteJokes, toggleFavList } = props;

  useEffect(() => {
    loadFavouriteJokes();
  }, []);

  const menuButtonClick = (e) => {
    e.stopPropagation();
    toggleFavList();
  };

  const styleFavouritePanel = classNames("favourite", { active: state.showOnMobile });

  const showContent = () => {
    const cardElementList = state.favourites.map((favJokeData) => (
      <JokeCard key={favJokeData.id} styleClassPrefix="favourite" data={favJokeData} showTag={false} />
    ));

    return state.isLoading ? <Loader /> : cardElementList;
  };

  const asideHeader = (
    <header className="favourite-header">
      {state.showOnMobile ? (
        <button className="button menu-btn favourite__menu-btn" onClick={menuButtonClick} type="button">
          Favourite
        </button>
      ) : (
        <h3 className="favourite-title">Favourite</h3>
      )}
    </header>
  );
  return (
    <aside className={styleFavouritePanel}>
      <section className="favourite-content">
        {asideHeader}
        <section className="favourite__list">{showContent()}</section>
      </section>
    </aside>
  );
};

const mapStateToProps = (state) => ({
  state: {
    favourites: state.jokes.favourites,
    showOnMobile: state.uiState[uiComponents.FAV_LIST_COMPONENT].showOnMobile,
    isLoading: state.uiState.loading[uiComponents.FAV_LIST_COMPONENT],
  },
});

export default connect(mapStateToProps, {
  loadFavouriteJokes,
  toggleFavList,
})(FavList);
