import React from "react";
import * as PropTypes from "prop-types";
import styles from "./styles.scss";

const StripedHero = ({ type, els, viewing }) => (
  <header>
    <div
      className={
        type === "search"
          ? styles.search_stripes
          : styles.movie_stripes
      }
    >
      {els.map((_, i) => (
        <span className={styles[`s${_}`]} key={`0.${i}`} />
      ))}
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
