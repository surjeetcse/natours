import React, { Component } from "react";
import TourPopup from "./Popup/TourPopup";


class SectionTours extends Component {
  
    render() {
        let url="url";
      return (
        <section className="section__tours" id="sec_tours">
        <div className="u-center-text">
          <h2 className="heading-secondary">
            Most Popular tours
          </h2>
        </div>
        <div className="row">
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">
                  &nbsp;
                </div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">
                    The see Explorer
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>3 day tours</li>
                    <li>up to 30 people</li>
                    <li>2 tour guide</li>
                    <li>sleep in cozy</li>
                    <li>difficulty easy</li>
                  </ul>
                </div>
              </div> 
              <div className="card__side card__side--back card__side--back--1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">
                      only
                    </p>
                    <p className="card__price-value">
                      $500
                    </p>
                    <a href="#popup" className="btn btn--white">Book now</a>
                  </div>
                </div>
              </div> 
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2">
                  &nbsp;
                </div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--2">
                    The forest killer
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>3 day tours</li>
                    <li>up to 30 people</li>
                    <li>2 tour guide</li>
                    <li>sleep in cozy</li>
                    <li>difficulty easy</li>
                  </ul>
                </div>
              </div> 
              <div className="card__side card__side--back card__side--back--2">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">
                      only
                    </p>
                    <p className="card__price-value">
                      $500
                    </p>
                    <a href="#popup" className="btn btn--white">Book now</a>
                  </div>
                </div>
              </div> 
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3">
                  &nbsp;
                </div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3">
                    The see Explorer
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>3 day tours</li>
                    <li>up to 30 people</li>
                    <li>2 tour guide</li>
                    <li>sleep in cozy</li>
                    <li>difficulty easy</li>
                  </ul>
                </div>
              </div> 
              <div className="card__side card__side--back card__side--back--3">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">
                      only
                    </p>
                    <p className="card__price-value">
                      $840
                    </p>
                    <a href="#popup" className="btn btn--white">Book now</a>
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </div>
        <div className="u-center-text u-margen-top-huge">
          <a href={url} className="btn btn--green">Discover all tours</a>
        </div>
        <TourPopup />
      </section>      
      );
    }
  };
  export default SectionTours;