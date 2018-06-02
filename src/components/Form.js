import React from "react";

const Form = ({
  controlledQuery: query,
  handleChangeQuery,
  viewing,
  feedback,
  handleSubmit,
  clearResults,
  clearQuery,
  cancelSearch,
}) => (
  <div className="ui-form-container">
    <form
      className="ui-form"
      onSubmit={e => handleSubmit(e, query)}
    >
      <div className="ui-button-clear-container">
        <span
          tabIndex="1"
          onClick={() => {
            // clearResults();
            clearQuery();
          }}
          className="ui-button-clear"
        >
          Clear
        </span>
      </div>
      <div className="">
        <input
          tabIndex="2"
          type="search"
          className="ui-input"
          value={query}
          onChange={handleChangeQuery}
          placeholder="Search Title..."
          disabled={viewing === "loading"}
        />
        {viewing === "loading" && <LoaderBar />}
      </div>
      <div className="ui-buttons">
        <button
          tabIndex="3"
          className="ui-button"
          disabled={viewing === "loading"}
        >
          {feedback[viewing] || "Search"}
        </button>
        {viewing === "loading" && (
          <button
            tabIndex="4"
            className="ui-button"
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
