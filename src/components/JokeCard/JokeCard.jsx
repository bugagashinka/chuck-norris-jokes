import React from "react";
import heartIcon from "assets/images/home-page/joke-card/heart.svg";
import textIcon from "assets/images/home-page/joke-card/text-icon.svg";

const JokeCard = (props) => {
  const { styleClassPrefix: prefix, data } = props;
  const { id = "", url = "", value: text = "", updatedAt = "", categories = [] } = data || {};

  const tagElementList = categories.map((tag) => <span className={`jokecard-tag ${prefix}__item-tag`}>{tag}</span>);

  return (
    <article className={`jokecard ${prefix}-joke ${prefix}__item`}>
      <header className={`jokecard-header ${prefix}__item-header`}>
        <button className={`button pin-btn ${prefix}__item-pin`}>
          <img className={`pin-btn__img`} src={heartIcon} alt="heart button" />
        </button>
      </header>
      <main className={`jokecard-body ${prefix}__item-body`}>
        <div className={`jokecard__inner ${prefix}__body-inner`}>
          <div className={`jokecard-img ${prefix}__item-img`} style={{ backgroundImage: `url(${textIcon})` }}></div>
          <section className={`jokecard-desc ${prefix}__item-desc`}>
            <section className={`jokecard-id ${prefix}__item-id`}>
              ID:
              <a href={url} className={`jokecard-id__link ${prefix}__item-link`}>
                {id}
              </a>
            </section>
            <section className={`jokecard-text ${prefix}__item-text`}>{text}</section>
          </section>
        </div>
      </main>
      <footer className={`jokecard-footer ${prefix}__item-footer`}>
        <span className={`jokecard-updated ${prefix}__item-update`}>Last update: {updatedAt}</span>
        {tagElementList}
      </footer>
    </article>
  );
};

export default JokeCard;
