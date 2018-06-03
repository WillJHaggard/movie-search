// Extenral Deps
import React, { Children } from "react";
import * as PropTypes from "prop-types";
// Intenral Deps
import AnimatedItems from "../../containers/AnimatedItems";
import styles from "./styles.scss";

/**
  Container for items of state.gallery.items and passes
  props to AnimatedItems for animating in a styled sequence
*/
const TableView = ({
  feedback,
  viewing,
  selectItem,
  items,
}) => (
  <main
    style={{
      paddingTop: "3.75rem",
      maxWidth: "52rem",
      margin: "0 auto",
    }}
    className={styles.items}
    data-state={viewing}
  >
    {viewing === "error" ? (
      <article className={styles.no_results_container}>
        <div className={styles.content}>
          <h1 className={styles.title}>No Results</h1>
        </div>
      </article>
    ) : (
      viewing === "gallery" && (
        <div>
          <div className={styles.results_container}>
            <span className={styles.button_results}>
              {items.length > 1
                ? `${items.length} Results`
                : `${items.length} Result`}
            </span>
          </div>

          <AnimatedItems
            render={({
              animatedItems = [],
              cb = () => null,
            }) =>
              Boolean(animatedItems.length) &&
              Children.toArray(animatedItems.map(cb))
            }
          />
        </div>
      )
    )}
  </main>
);

TableView.defaultProps = {
  feedback: {},
  viewing: "",
  items: [],
};

TableView.propTypes = {
  // object of keys that match possible viewing state values for changing information
  feedback: PropTypes.object.isRequired,
  // string that is checked against feedback msgs; tells state what user is looking at
  viewing: PropTypes.string.isRequired,
  // array of items received from search
  items: PropTypes.array.isRequired,
};

export default TableView;
