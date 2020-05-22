import React from "react";
import classNames from "classnames";
import { connect } from "react-redux";
import { toggleFavList } from "redux/reducers/ui/favListReducer";

const Header = (props) => {
  const { isButtonVisible, toggleFavList } = props;
  const styleMenuButton = classNames("header__menu-btn", "menu-btn button");

  const menuClickHandler = () => toggleFavList();

  const stylemenuButton = classNames(styleMenuButton, { active: isButtonVisible });
  const menuButton = (
    <button className={stylemenuButton} onClick={menuClickHandler}>
      Favourite
    </button>
  );

  return (
    <header className="header home-page__header">
      <div className="container">
        <div className="header__inner">
          <h1 className="header__headline">MSI 2020</h1>
          {menuButton}
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  isButtonVisible: state.uiState.favListState.showOnMobile,
});

export default connect(mapStateToProps, { toggleFavList })(Header);
