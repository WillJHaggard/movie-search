import React, { Component } from "react";
import { shape, object } from "prop-types";
import { connect } from "react-redux";
import { StripedHero, Showcase } from "../../components";

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

export default Movie;
