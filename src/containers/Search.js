// External Deps
import React, { Component, Children } from "react";
import { push } from "react-router-redux";
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
  selectItem,
  handleSubmit,
  cancelSearch,
} from "../services/gallery/actions";
import {
  Form,
  LoaderBar,
  TableView,
  StripedHero,
} from "../components";

class Search extends Component {
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
  ...props,
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
