import React, { useEffect } from "react";
import JokeCard from "components/JokeCard";
import { connect } from "react-redux";
import { loadFavouriteJokes } from "redux/reducers/jokesReducer";
import { toggleFavList } from "redux/reducers/ui/favListReducer";
import classNames from "classnames";

const FavList = (props) => {
  const { favourites, loadFavouriteJokes, showOnMobile, toggleFavList } = props;

  useEffect(() => {
    loadFavouriteJokes();
  }, []);

  const menuButtonClick = () => toggleFavList();

  const cardElementList = favourites.map((favJokeData) => (
    <JokeCard key={favJokeData.id} styleClassPrefix="favourite" data={favJokeData} showTag={false} />
  ));
  const styleFavouritePanel = classNames("favourite", { active: showOnMobile });

  const asideHeader = (
    <header className="favourite-header">
      {showOnMobile ? (
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
        <section className="favourite__list">{cardElementList}</section>
      </section>
    </aside>
  );
};

const mapStateToProps = (state) => ({
  favourites: state.jokes.favourites,
  showOnMobile: state.uiState.favListState.showOnMobile,
});

export default connect(mapStateToProps, {
  loadFavouriteJokes,
  toggleFavList,
})(FavList);
