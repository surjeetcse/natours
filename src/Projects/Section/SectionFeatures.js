
import React, { Component } from "react";

class SectionFeatures extends Component {
    
    render() {
      let url="url";
      return (
        <section className="section-features">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary-white">
            The Features of this company
          </h2>
        </div>
        <div className="row u-margen-bottom-medium">
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="icon-basic-world feature-box__icon" />
              <h3 className="heading-tertiary u-margen-bottom-small">Explore the world</h3>
              <p className="feature-box__text">Browse through beautiful high-resolution </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="icon-basic-compass feature-box__icon" />
              <h3 className="heading-tertiary u-margen-bottom-small">Meet nature </h3>
              <p className="feature-box__text">Browse through beautiful high-resolution </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="icon-basic-map feature-box__icon" />
              <h3 className="heading-tertiary u-margen-bottom-small">Find your way</h3>
              <p className="feature-box__text">Browse through beautiful high-resolution </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="icon-basic-heart feature-box__icon" />
              <h3 className="heading-tertiary u-margen-bottom-small">Live a healthier life</h3>
              <p className="feature-box__text">Browse through beautiful high-resolution </p>
            </div>
          </div>
        </div>
      </section>
      );
    }
  };
  export default SectionFeatures;