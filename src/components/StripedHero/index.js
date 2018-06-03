// Extenral Deps
import React from "react";
import * as PropTypes from "prop-types";
// Intenral Deps
import styles from "./styles.scss";

/**
  Elements that map the number of span tags by the props array given.
  Uses CSS Grid and skews linear-gradients to create a colorful background.

  `styles[`s${_}`]` below simply interpolates classNames to match .s1, .s2, .s3
  This is useful if you want a shorter skewed grid
*/
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
  els: [1, 2, 3, 4, 5],
  viewing: "",
};

StripedHero.propTypes = {
  // type changes colors/selectors and is used for either route
  type: PropTypes.string.isRequired,
  // array of numbers that is important only in how many items are in the array (max = 5)
  els: PropTypes.array.isRequired,
  // string that is checked against feedback msgs; tells state what user is looking at
  viewing: PropTypes.string,
};

export default StripedHero;
