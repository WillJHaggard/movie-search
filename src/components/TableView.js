import React, { Children } from "react";
import AnimatedItems from "../scenes/SearchPage/AnimatedItems";
//import no_available_poster from "../../no_available_poster.svg";

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
    className="ui-items"
    data-state={viewing}
  >
    {viewing === "error" ? (
      <article
        className="dt w-100 bb b--black-05 pb2 mt2"
        href="#0"
      >
        <div className="dtc v-mid">
          <h1
            className="f6 f5-ns fw6 lh-title black mv0"
            style={{ textAlign: "center" }}
          >
            No Results
          </h1>
        </div>
      </article>
    ) : (
      viewing === "gallery" && (
        <div>
          <span className="ui-button-results">
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
