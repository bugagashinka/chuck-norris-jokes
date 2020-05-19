import React from "react";

const App = () => {
  return (
    <section className="wrapper">
      <header className="header home-page__header">
        <div className="container">
          <div className="header__inner">
            <div className="header__headline">MSI 2020</div>
            <a href="#" className="header__menu-btn">
              Favourite
            </a>
          </div>
        </div>
      </header>
      <section className="content">
        <div className="container">
          <div className="promo">
            <div className="promo__title">Hey!</div>
            <div className="promo__subtitle">Let’s try to find a joke for you:</div>
          </div>
          <form className="form">
            <p>
              <input className="radio-input form__random" type="radio" id="joke-random" name="search" value="random" />
              <label className="radio-label" for="joke-random">
                Random
              </label>
            </p>

            <div className="category">
              <input
                className="radio-input form__category"
                type="radio"
                id="joke-category"
                name="search"
                value="category"
              />
              <label className="radio-label" for="joke-category">
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
                    animal
                  </a>
                </li>
                <li className="category__tag category__list-item">
                  <a href="#" className="category__tag-link">
                    animal
                  </a>
                </li>
                <li className="category__tag category__list-item">
                  <a href="#" className="category__tag-link active">
                    animal
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-search">
              <p>
                <input
                  className="radio-input form__search"
                  type="radio"
                  id="joke-search"
                  name="search"
                  value="keyword"
                />
                <label className="radio-label" for="joke-search">
                  Search
                </label>
              </p>

              <input type="text" className="form__search-input" name="" placeholder="Free text search..." />
            </div>

            <button className="form__search-btn">Get a joke</button>
          </form>
        </div>
      </section>
      <aside className="favourite">
        <div className="favourite__title">Favourite</div>
        <section className="favourite__list">
          <div className="favourite__item">
            <div className="favourite__item-header">
              <button href="#" className="favourite__item-pin pin-btn">
                <img src="img/home-page/heart.svg" alt="heart button" />
              </button>
            </div>
            <div className="favourite__item-body">
              <div className="favourite__body-inner">
                <div className="favourite__item-img" styles="background-image: url();"></div>
                <div className="fovourite__item-desc">
                  <div className="favourite__item-id">
                    ID:{" "}
                    <a href="#" className="favourite__item-link">
                      XNaAxUduSw6zANDaIEab7A
                    </a>
                  </div>
                  <div className="favourite__item-text">
                    No one truly knows who's Chuck Norris' real father. No one is biologically strong enough for this.
                    He must've conceived himself.
                  </div>
                </div>
              </div>
            </div>
            <div className="favourite__item-footer">
              <div className="favourite__item-update">Last update: 1923 hours ago</div>
            </div>
          </div>

          <div className="favourite__item">
            <div className="favourite__item-header">
              <button href="#" className="favourite__item-pin pin-btn">
                <img src="img/home-page/heart.svg" alt="heart button" />
              </button>
            </div>
            <div className="favourite__item-body">
              <div className="favourite__body-inner">
                <div className="favourite__item-img" styles="background-image: url();"></div>
                <div className="fovourite__item-desc">
                  <div className="favourite__item-id">
                    ID:{" "}
                    <a href="#" className="favourite__item-link">
                      XNaAxUduSw6zANDaIEab7A
                    </a>
                  </div>
                  <div className="favourite__item-text">
                    No one truly knows who's Chuck Norris' real father. No one is biologically strong enough for this.
                    He must've conceived himself.
                  </div>
                </div>
              </div>
            </div>
            <div className="favourite__item-footer">
              <div className="favourite__item-update">Last update: 1923 hours ago</div>
            </div>
          </div>

          <div className="favourite__item">
            <div className="favourite__item-header">
              <button href="#" className="favourite__item-pin pin-btn">
                <img src="img/home-page/heart.svg" alt="heart button" />
              </button>
            </div>
            <div className="favourite__item-body">
              <div className="favourite__body-inner">
                <div className="favourite__item-img" styles="background-image: url();"></div>
                <div className="fovourite__item-desc">
                  <div className="favourite__item-id">
                    ID:{" "}
                    <a href="#" className="favourite__item-link">
                      XNaAxUduSw6zANDaIEab7A
                    </a>
                  </div>
                  <div className="favourite__item-text">
                    No one truly knows who's Chuck Norris' real father. No one is biologically strong enough for this.
                    He must've conceived himself.
                  </div>
                </div>
              </div>
            </div>
            <div className="favourite__item-footer">
              <div className="favourite__item-update">Last update: 1923 hours ago</div>
            </div>
          </div>

          <div className="favourite__item">
            <div className="favourite__item-header">
              <button href="#" className="favourite__item-pin pin-btn">
                <img src="img/home-page/heart.svg" alt="heart button" />
              </button>
            </div>
            <div className="favourite__item-body">
              <div className="favourite__body-inner">
                <div className="favourite__item-img" styles="background-image: url();"></div>
                <div className="fovourite__item-desc">
                  <div className="favourite__item-id">
                    ID:{" "}
                    <a href="#" className="favourite__item-link">
                      XNaAxUduSw6zANDaIEab7A
                    </a>
                  </div>
                  <div className="favourite__item-text">
                    No one truly knows who's Chuck Norris' real father. No one is biologically strong enough for this.
                    He must've conceived himself.
                  </div>
                </div>
              </div>
            </div>
            <div className="favourite__item-footer">
              <div className="favourite__item-update">Last update: 1923 hours ago</div>
            </div>
          </div>

          <div className="favourite__item">
            <div className="favourite__item-header">
              <button href="#" className="favourite__item-pin pin-btn">
                <img src="img/home-page/heart.svg" alt="heart button" />
              </button>
            </div>
            <div className="favourite__item-body">
              <div className="favourite__body-inner">
                <div className="favourite__item-img" styles="background-image: url();"></div>
                <div className="fovourite__item-desc">
                  <div className="favourite__item-id">
                    ID:{" "}
                    <a href="#" className="favourite__item-link">
                      XNaAxUduSw6zANDaIEab7A
                    </a>
                  </div>
                  <div className="favourite__item-text">
                    No one truly knows who's Chuck Norris' real father. No one is biologically strong enough for this.
                    He must've conceived himself.
                  </div>
                </div>
              </div>
            </div>
            <div className="favourite__item-footer">
              <div className="favourite__item-update">Last update: 1923 hours ago</div>
            </div>
          </div>

          <div className="favourite__item">
            <div className="favourite__item-header">
              <button href="#" className="favourite__item-pin pin-btn">
                <img src="img/home-page/heart.svg" alt="heart button" />
              </button>
            </div>
            <div className="favourite__item-body">
              <div className="favourite__body-inner">
                <div className="favourite__item-img" styles="background-image: url();"></div>
                <div className="fovourite__item-desc">
                  <div className="favourite__item-id">
                    ID:{" "}
                    <a href="#" className="favourite__item-link">
                      XNaAxUduSw6zANDaIEab7A
                    </a>
                  </div>
                  <div className="favourite__item-text">
                    No one truly knows who's Chuck Norris' real father. No one is biologically strong enough for this.
                    He must've conceived himself.
                  </div>
                </div>
              </div>
            </div>
            <div className="favourite__item-footer">
              <div className="favourite__item-update">Last update: 1923 hours ago</div>
            </div>
          </div>

          <div className="favourite__item">
            <div className="favourite__item-header">
              <button href="#" className="favourite__item-pin pin-btn">
                <img src="img/home-page/heart.svg" alt="heart button" />
              </button>
            </div>
            <div className="favourite__item-body">
              <div className="favourite__body-inner">
                <div className="favourite__item-img" styles="background-image: url();"></div>
                <div className="fovourite__item-desc">
                  <div className="favourite__item-id">
                    ID:{" "}
                    <a href="#" className="favourite__item-link">
                      XNaAxUduSw6zANDaIEab7A
                    </a>
                  </div>
                  <div className="favourite__item-text">
                    No one truly knows who's Chuck Norris' real father. No one is biologically strong enough for this.
                    He must've conceived himself.
                  </div>
                </div>
              </div>
            </div>
            <div className="favourite__item-footer">
              <div className="favourite__item-update">Last update: 1923 hours ago</div>
            </div>
          </div>
        </section>
      </aside>
    </section>
  );
};

export default App;
