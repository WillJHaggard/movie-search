import React, { Children } from "react";
//import no_available_poster from "../../no_available_poster.svg";

const TableView = ({
  feedback,
  viewing,
  items,
  selectItem,
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
          <span className="ui-button-clear">
            {items.length > 1
              ? `${items.length} Results`
              : `${items.length} Result`}
          </span>
          {Children.toArray(
            items.map((item, i) => (
              <article
                className="dt w-100 bb b--black-05 pb2 mt2"
                href="#0"
              >
                <div className="dtc w2 w3-ns v-mid">
                  <img
                    src={item.Poster}
                    className="ba b--black-10 db br2 w2 w3-ns h2 h3-ns"
                  />
                </div>
                <div className="dtc v-mid pl3">
                  <h1 className="f6 f5-ns fw6 lh-title black mv0">
                    {item.Title}{" "}
                  </h1>
                  <h2 className="f6 fw4 mt0 mb0 black-60">
                    {item.Year}
                  </h2>
                </div>
                <div className="dtc v-mid">
                  <form className="w-100 tr">
                    <button
                      className="f6 ui-button-select"
                      type="submit"
                    >
                      View
                    </button>
                  </form>
                </div>
              </article>
            ))
          )}
        </div>
      )
    )}
  </main>
);

export default TableView;
