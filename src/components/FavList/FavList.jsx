import React, { useEffect } from "react";
import JokeCard from "components/JokeCard";
import { connect } from "react-redux";
import { loadFavouriteJokes } from "redux/reducers/jokesReducer";

const FavList = (props) => {
  const { favourites, loadFavouriteJokes } = props;

  useEffect(() => {
    loadFavouriteJokes();
  }, []);

  const cardElementList = favourites.map((favJokeData) => (
    <JokeCard key={favJokeData.id} styleClassPrefix="favourite" data={favJokeData} />
  ));
  return (
    <aside className="favourite">
      <h3 className="favourite-title">Favourite</h3>
      <section className="favourite__list">{cardElementList}</section>
    </aside>
  );
};

const mapStateToProps = (state) => ({
  favourites: state.jokes.favourites,
});

export default connect(mapStateToProps, {
  loadFavouriteJokes,
})(FavList);
