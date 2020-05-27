import React from "react";
import Header from "components/Header";
import FilterForm from "components/FilterForm";
import FavList from "components/FavList";
import JokesList from "components/JokesList";
import GlobalErrorMessage from "ui/GlobalErrorMessage";

const App = () => {
  return (
    <section className="wrapper">
      <Header />
      <section className="content">
        <div className="container">
          <div className="promo">
            <h2 className="promo-title">Hey!</h2>
            <h3 className="promo-subtitle">Let’s try to find a joke for you:</h3>
          </div>
          <GlobalErrorMessage />
          <FilterForm />
          <JokesList />
        </div>
      </section>
      <FavList />
    </section>
  );
};

export default App;
