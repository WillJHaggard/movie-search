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

class Search extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    viewing: PropTypes.string.isRequired,
    feedback: PropTypes.object.isRequired,
    clearResults: PropTypes.func.isRequired,
    cancelSearch: PropTypes.func.isRequired,
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
