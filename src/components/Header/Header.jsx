import React from "react";

const Header = () => {
  return (
    <header className="header home-page__header">
      <div className="container">
        <div className="header__inner">
          <h1 className="header__headline">MSI 2020</h1>
          <button href="#" className="header__menu-btn menu-btn button">
            Favourite
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
