import React from "react";
import Header from "components/Header";
import FilterForm from "components/FilterForm";

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
          <FilterForm />
        </div>
      </section>
    </section>
  );
};

export default App;
