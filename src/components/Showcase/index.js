// Extenral Deps
import React from "react";
import * as PropTypes from "prop-types";
// Intenral Deps
import Image from "../../containers/Image";
import styles from "./styles.scss";

/**
  Shows assigned item that is comprised of shallow information from state.gallery.items
  and deeper information from state.details.item
*/
const Showcase = ({
  item: {
    Poster: src,
    Title: title,
    Year: year,
    imdbID: id,
    Runtime: runtime,
  },
}) => (
  <div className={styles.showcase_container}>
    <div className={styles.showcase}>
      <figure className="floating-poster">
        <Image
          className={styles.poster}
          src={src}
          alt={`${title} ${year}`}
        />
      </figure>
      <div className={styles.showcase_content}>
        <h1 className={styles.showcase_title}>{title}</h1>
        <p className={styles.showcase_body}>Year: {year}</p>
        <p className={styles.showcase_body}>
          Runtime: {runtime}
        </p>
        <a
          href={`https://imdb.com/title/${id}`}
          className={styles.imdb_button}
        >
          Visit IMDB
        </a>
      </div>
    </div>
  </div>
);

Showcase.defaultProps = {
  item: {
    Poster: "",
    Title: "",
    Year: "",
    imdbID: "",
    Runtime: "",
  },
};

Showcase.propTypes = {
  // item is larger than this from api, but for rendering it requires this shape at least
  item: PropTypes.shape({
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
    Runtime: PropTypes.string.isRequired,
  }),
};

export default Showcase;
