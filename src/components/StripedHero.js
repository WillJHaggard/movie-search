import React from "react";
import * as PropTypes from "prop-types";

const StripedHero = ({ type, els, viewing }) => (
  <header>
    <div
      className={
        type === "search"
          ? "search-stripes"
          : "movie-stripes"
      }
    >
      {els.map((_, i) => <span key={`0.${i}`} />)}
    </div>
  </header>
);

StripedHero.defaultProps = {
  type: "search",
  els: [],
  viewing: "",
};

StripedHero.propTypes = {
  type: PropTypes.string.isRequired,
  els: PropTypes.array.isRequired,
  viewing: PropTypes.string,
};

export default StripedHero;
