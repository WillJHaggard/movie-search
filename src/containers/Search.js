// External Deps
import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// Internal Deps
import {
  getItems,
  getViewing,
  getFeedback,
} from "../services/gallery/selectors";
import {
  clearResults,
  handleSubmit,
  cancelSearch,
} from "../services/gallery/actions";
import {
  Form,
  TableView,
  StripedHero,
} from "../components";

/**
  Search component that acts as container for Form and TableView
  Owns local controlled state that updates with each keystroke
  Snapshot of this state is what is sent as encoded query to action creator
  and saga
*/
class Search extends Component {
  static propTypes = {
    // array of items received from search
    items: PropTypes.array.isRequired,
    // string that is checked against feedback msgs; tells state what user is looking at
    viewing: PropTypes.string.isRequired,
    // object of keys that match possible viewing state values for changing information
    feedback: PropTypes.object.isRequired,
    // calls action CLEAR_RESULTS and simply clears items
    clearResults: PropTypes.func.isRequired,
    // cancels search in progress
    cancelSearch: PropTypes.func.isRequired,
    // calls request for items based on snapshot of local controlled state through action creator
    handleSubmit: PropTypes.func.isRequired,
  };

  static defaultProps = {
    items: [],
    viewing: "",
    feedback: {},
  };
  /**
    Controlled state can live here and we
    can take a snapshot of it per form submission
  */
  state = { controlledQuery: "" };

  handleChangeQuery = query =>
    this.setState({ controlledQuery: query });
  clearQuery = query =>
    this.setState({ controlledQuery: "" });

  render() {
    return (
      <main>
        <StripedHero
          type="search"
          els={[1, 2, 3, 4, 5, 6]}
        />
        <Form
          {...this.props}
          clearQuery={this.clearQuery}
          controlledQuery={this.state.controlledQuery}
          handleChangeQuery={e =>
            this.handleChangeQuery(e.target.value)
          }
        />
        <TableView {...this.props} />
      </main>
    );
  }
}

const mapStateToProps = (state, props) => ({
  items: getItems(state),
  viewing: getViewing(state),
  feedback: getFeedback(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      clearResults,
      cancelSearch,
      handleSubmit,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(
  Search
);
