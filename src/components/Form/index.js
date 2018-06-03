import React from "react";
import LoaderBar from "../LoaderBar";
import styles from "./styles.scss";

const Form = ({
  controlledQuery: query,
  handleChangeQuery,
  viewing,
  feedback,
  handleSubmit,
  clearQuery,
  clearResults,
  cancelSearch,
}) => (
  <div className={styles.form_container}>
    <form
      className={styles.form}
      onSubmit={e => handleSubmit(e, query)}
    >
      <div className={styles.button_clear_container}>
        <span
          tabIndex="1"
          onClick={() => {
            if (Boolean(query.length)) {
              clearQuery();
            }
            clearResults();
          }}
          className={styles.button_clear}
        >
          Clear Results
        </span>
      </div>
      <div className="">
        <input
          tabIndex="2"
          type="search"
          className={styles.input}
          value={query}
          onChange={handleChangeQuery}
          placeholder="Search Title..."
          disabled={viewing === "loading"}
        />
        {viewing === "loading" && <LoaderBar />}
      </div>
      <div className={styles.buttons}>
        <button
          tabIndex="3"
          className={styles.button}
          disabled={viewing === "loading"}
        >
          {feedback[viewing] || "Search"}
        </button>
        {viewing === "loading" && (
          <button
            tabIndex="4"
            className={styles.button}
            type="button"
            onClick={cancelSearch}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  </div>
);

export default Form;
