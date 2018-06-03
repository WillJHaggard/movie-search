// Extenral Deps
import React from "react";
// Intenral Deps
import styles from "./styles.scss";

/**
  Represents elements used for viewing === 'loading'
  and is an infinite keyframed colored bar to show the user
  activity while searching

  More prominent in slow 3G of network tab/slow internet speed
*/
const LoaderBar = () => (
  <div className={styles.loader_bar}>
    <div className={styles.bar} />
  </div>
);

export default LoaderBar;
