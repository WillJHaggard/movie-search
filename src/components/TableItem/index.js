import React from "react";
import { withRouter } from "react-router-dom";
import { NavigationLink } from "../index";
import Image from "../../containers/Image";
import styles from "./styles.scss";

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

export default withRouter(TableItem);
