import React from "react";

let scrollToTop = () =>
  (document.documentElement.scrollTop = 0);

export default () => (
  <footer className="ui-footer">
    <div className="ui-footer-container">
      <div className="ui-footer-copy">
        <h1 className="ui-footer-title">
          <span className="ui-footer-subtitle">
            Didn't find what you were looking for?
          </span>
          Try another search.
        </h1>
      </div>
      <div className="ui-footer-up">
        <span
          className="ui-footer-up-arrow"
          onClick={scrollToTop}
        >
          &#8593;
        </span>
      </div>
    </div>
  </footer>
);
