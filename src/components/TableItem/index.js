// Extenral Deps
import React from "react";
import * as PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
// Intenral Deps
import { NavigationLink } from "../index";
import Image from "../../containers/Image";
import styles from "./styles.scss";

/**
  Individual item component that is mapped over with state.gallery.items
*/
const TableItem = ({
  location: { pathname },
  item,
  item: {
    Poster: src,
    Title: title,
    Year: year,
    imdbID: id,
  },
  index,
  displayText,
  requestDetails,
}) => (
  <article className={styles.container} key={`0.${index}`}>
    <div className={styles.image_container}>
      <Image
        src={src}
        className={styles.image}
        alt={`${title}`}
      />
    </div>
    <div className={styles.content_container}>
      <h1 className={styles.content_title}>{title} </h1>
      <h2 className={styles.content_year}>{year}</h2>
    </div>
    <div className={styles.button_container}>
      <div className={styles.button_outer}>
        <NavigationLink
          className={styles.button_select}
          style={{ cursor: "default" }}
          route={pathname}
          to={`/movie/${id}`}
          text={displayText}
          cb={requestDetails}
        />
      </div>
    </div>
  </article>
);

TableItem.defaultProps = {
  location: { pathname: "" },
  item: {
    Poster: "",
    Title: "",
    Year: "",
    imdbID: "",
  },
  index: 0,
  displayText: "View",
};

TableItem.propTypes = {
  // router props for NavigationLink
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  // Similar to Showcase, but displays shallow information in a list
  item: PropTypes.shape({
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
  }),
  // index of callback
  index: PropTypes.number.isRequired,
  // text of button that links user to MoviePage
  displayText: PropTypes.string.isRequired,
  // callback given to NavigationLink to start services/details/sagas
  requestDetails: PropTypes.func.isRequired,
};

export default withRouter(TableItem);
