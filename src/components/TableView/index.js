import React, { Children } from "react";
import AnimatedItems from "../../containers/AnimatedItems";
import styles from "./styles.scss";

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
          <span className={styles.button_results}>
            {items.length > 1
              ? `${items.length} Results`
              : `${items.length} Result`}
          </span>
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

export default TableView;
