import React, { Component, Children } from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  Form,
  LoaderBar,
  TableView,
  StripedHero,
} from "../../components";

import {
  clearResults,
  selectItem,
  handleSubmit,
  cancelSearch,
} from "../../modules/search";

class Search extends Component {
  state = { controlledQuery: "" };

  handleChangeQuery = query =>
    this.setState({ controlledQuery: query });
  clearQuery = query =>
    this.setState({ controlledQuery: "" });

  render() {
    return (
      <main>
        <StripedHero els={[1, 2, 3, 4, 5, 6]} />
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
  items: state.search.items,
  viewing: state.search.viewing,
  feedback: state.search.feedback,
  ...props,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      clearResults,
      selectItem,
      cancelSearch,
      handleSubmit,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(
  Search
);
