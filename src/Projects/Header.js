
import React, { Component } from "react";

class Header extends Component {
    
    render() {
      let url="url";
      return (
        <header className="header">
        <div className="header__logo-box">
          <img src="img/logo-white.png" alt="Logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">outdoors</span>
            <span className="heading-primary--sub">is where life happen</span>
          </h1>
          <a href={url} className="btn btn--white btn--animated">Diccover our tours</a>
        </div>
      </header>
      );
    }
  };
  export default Header;