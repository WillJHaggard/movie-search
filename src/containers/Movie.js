// External Deps
import React, { Component } from "react";
import { connect } from "react-redux";
// Internal Deps
import { getItem } from "../services/details/selectors";
import { getViewing } from "../services/gallery/selectors";
import { StripedHero, Showcase } from "../components";

/**
  Movie component that acts as stateful container for Showcase
*/
class Movie extends Component {
  render() {
    return (
      <main>
        <StripedHero
          viewing={this.props.viewing}
          els={[1, 2]}
          type="movie"
        />
        <Showcase {...this.props} />
      </main>
    );
  }
}

const mapStateToProps = (state, props) => ({
  item: getItem(state),
  viewing: getViewing(state),
});

export default connect(mapStateToProps, null)(Movie);
