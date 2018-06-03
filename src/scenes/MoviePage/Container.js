// External Deps
import React, { Component } from "react";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import * as Animated from "animated/lib/targets/react-dom";
// Internal Deps
import { getItem } from "../../services/details/selectors";
import Movie from "../../containers/Movie";
import { Header, Footer } from "../../components";

/**
  Class that manages layout, refreshes where state loses item details, and
  animated header text

  A next step would be persist redux state and/or save selected item to localStorage
  if the user may need it on refresh
*/
class MoviePage extends Component {
  delay = 750;
  static contextTypes = {
    // router to push back to '/' if no item is selected
    router: PropTypes.shape({
      history: PropTypes.object.isRequired,
    }),
  };

  state = { animate: new Animated.Value(0) };

  componentDidMount() {
    setTimeout(
      () =>
        Animated.spring(this.state.animate, {
          toValue: 1,
        }).start(),
      this.delay
    );
  }

  componentWillMount() {
    const { item } = this.props;
    if (!item.imdbID) this.context.router.history.push("/");
  }

  render() {
    const { animate } = this.state;
    let goBackStyle = {
      transform: Animated.template`
      translate3d(${animate.interpolate({
        inputRange: [0, 1],
        outputRange: ["-24px", "0px"],
      })},0,0)
    `,
      opacity: Animated.template`${animate}`,
    };
    return (
      <div>
        <div style={{ minHeight: "calc(100vh - 1rem)" }}>
          <Header
            goBackStyle={goBackStyle}
            content={{
              title: "← Search Again",
            }}
          />
          <Movie />
        </div>
        <div>
          <Footer
            content={{
              subtitle: "Wrong Movie?",
              title: "Try another search.",
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  // item from state.details.item for pushing user back if empty
  item: getItem(state),
});

export default connect(mapStateToProps, null)(MoviePage);
