import React, { Component } from "react";

class Navigation extends Component {
    
    render() {
      let url="url";
      return (
        <section className="section-book">
        <div className="row">
          <div className="book">
            <div className="book__form">
              <div className="form">
                <form action="#" className="frrm">
                  <div className="u-margen-bottom-small">
                    <h2 className="heading-secondary">
                      start booking now
                    </h2>
                  </div>
                  <div className="form__group">
                    <input type="text" className="form__input" placeholder="Full name" required />
                    <label className="form__label">Full Name</label>
                  </div>
                  <div className="form__group">
                    <input type="email" className="form__input" placeholder="Email" required />
                    <label className="form__label">Full Name</label>
                  </div>
                  <div className="form__group u-margin-bottom-medium">
                    <div className="form__radio-group">
                      <input type="radio" className="form__radio-input" id="small" name="size" />
                      <label htmlFor="small" className="form__radio-label">
                        <span className="form__radio-button" />
                        Small tour group
                      </label>
                    </div>
                    <div className="form__radio-group u-margen-bottom-small">
                      <input type="radio" className="form__radio-input" id="large" name="size" />
                      <label htmlFor="large" className="form__radio-label">
                        <span className="form__radio-button" />
                        Large tour group
                      </label>
                    </div>
                  </div>
                  <div className="form__group">
                    <button className="btn btn--green">Next step →</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      );
    }
  };
  export default Navigation;