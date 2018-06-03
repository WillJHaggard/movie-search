// Extenral Deps
import React from "react";
import * as PropTypes from "prop-types";
// Internal Deps
import LoaderBar from "../LoaderBar";
import styles from "./styles.scss";

/**
  Holds text input and buttons that show elements based on where user
  is in current state
*/
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

Form.defaultProps = {
  controlledQuery: "",
  viewing: "",
  feedback: {},
};

Form.propTypes = {
  // controlled state; used as a snapshot for querying
  controlledQuery: PropTypes.string.isRequired,
  // string that is checked against feedback msgs; tells state what user is looking at
  viewing: PropTypes.string.isRequired,
  // object of keys that match possible viewing state values for changing information
  feedback: PropTypes.object,
  // sends e.target.value to local state (controlled)
  handleChangeQuery: PropTypes.func.isRequired,
  // function that dispatches 'SEARCH_REQUEST' that signals services/gallery/sagas
  handleSubmit: PropTypes.func.isRequired,
  // function that replaces controlled state with an empty string
  clearQuery: PropTypes.func.isRequired,
  // function that clears the items in state to show none while viewing gallery
  clearResults: PropTypes.func.isRequired,
  // cancels search by pressing button while saga is being awaiting api data
  cancelSearch: PropTypes.func.isRequired,
};

export default Form;
