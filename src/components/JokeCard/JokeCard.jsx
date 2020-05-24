import React from "react";
import heartIcon from "assets/images/home-page/joke-card/heart.svg";
import heartInactiveIcon from "assets/images/home-page/joke-card/heart-inactive.svg";
import textIcon from "assets/images/home-page/joke-card/text-icon.svg";
import { connect } from "react-redux";
import { toggleJokeLove } from "redux/reducers/jokesReducer";
import { formatDateToHours } from "utils/date";

const JokeCard = (props) => {
  const { styleClassPrefix: prefix, data, toggleJokeLove, showTag = true } = props;
  const { id = "", url = "", value: text = "", updatedAt = "", categories = [] } = data || {};

  const loveJokeHandler = () => {
    toggleJokeLove(data);
  };

  // Header
  const cardHeader = (
    <header className={`jokecard-header ${prefix}__item-header`}>
      <button className={`button pin-btn ${prefix}__item-pin`} onClick={loveJokeHandler}>
        <img className={`pin-btn__img`} src={data.loved ? heartIcon : heartInactiveIcon} alt="heart button" />
      </button>
    </header>
  );
  // Body
  const cardBody = (
    <main className={`jokecard-body ${prefix}__item-body`}>
      <div className={`jokecard__inner ${prefix}__body-inner`}>
        <div className={`jokecard-img ${prefix}__item-img`} style={{ backgroundImage: `url(${textIcon})` }}></div>
        <section className={`jokecard-desc ${prefix}__item-desc`}>
          <section className={`jokecard-id ${prefix}__item-id`}>
            <span className={`jokecard-label ${prefix}__item-label`}>ID:</span>
            <a href={url} className={`jokecard-id__link ${prefix}__item-link`}>
              {id}
            </a>
          </section>
          <section className={`jokecard-text ${prefix}__item-text`}>{text}</section>
        </section>
      </div>
    </main>
  );
  // Footer
  const tagElementList = categories.map((tag) => (
    <span key={tag} className={`jokecard-tag ${prefix}__item-tag`}>
      {tag}
    </span>
  ));
  const cardFooter = (
    <footer className={`jokecard-footer ${prefix}__item-footer`}>
      <span className={`jokecard-updated ${prefix}__item-update`}>
        Last update: {`${formatDateToHours(updatedAt)} hours ago`}
      </span>
      {showTag && tagElementList}
    </footer>
  );

  return (
    <article className={`jokecard ${prefix}-joke ${prefix}__item`}>
      {cardHeader}
      {cardBody}
      {cardFooter}
    </article>
  );
};

export default connect(null, { toggleJokeLove })(JokeCard);
