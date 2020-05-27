import React, { Component } from "react";

class Navigation extends Component {
    
    render() {
      let url="url";
      return (
        <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navigation-toggle" />
        <label htmlFor="navigation-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href={url} className="navigation__link"><span>01</span> tours guide</a>
            </li>
            <li className="navigation__item">
              <a href={url} className="navigation__link"><span>02</span> your benifits</a>
            </li>
            <li className="navigation__item">
              <a href={url} className="navigation__link"><span>03</span> popular tours</a>
            </li>
            <li className="navigation__item">
              <a href={url} className="navigation__link"><span>04</span>our Stories</a>
            </li>
            <li className="navigation__item">
              <a href={url} className="navigation__link"><span>05</span>Book tours</a>
            </li>
            <li className="navigation__item">
              <a href={url} className="navigation__link"><span>06</span>About company</a>
            </li>
          </ul>
        </nav>
      </div>
      );
    }
  };
  export default Navigation;