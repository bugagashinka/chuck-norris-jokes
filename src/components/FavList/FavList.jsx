import React from "react";
import JokeCard from "components/JokeCard";

const FavList = () => {
  return (
    <aside className="favourite">
      <h3 className="favourite-title">Favourite</h3>
      <section className="favourite__list">
        <JokeCard styleClassPrefix="favourite" />
        <JokeCard styleClassPrefix="favourite" />
        <JokeCard styleClassPrefix="favourite" />
        <JokeCard styleClassPrefix="favourite" />
        <JokeCard styleClassPrefix="favourite" />
        <JokeCard styleClassPrefix="favourite" />
        <JokeCard styleClassPrefix="favourite" />
      </section>
    </aside>
  );
};

export default FavList;
