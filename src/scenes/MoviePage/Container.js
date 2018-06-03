import React, { Component } from "react";
import { connect } from "react-redux";
import * as PropTypes from "prop-types";
import * as Animated from "animated/lib/targets/react-dom";

import {
  Header,
  Footer,
  LoaderBar,
  StripedHero,
  Showcase,
} from "../../components";
import { getItem } from "../../services/details/selectors";
import { getViewing } from "../../services/gallery/selectors";

class MoviePage extends Component {
  delay = 750;
  static contextTypes = {
    router: PropTypes.shape({
      history: PropTypes.object.isRequired,
    }),
  };

  static propTypes = {
    item: PropTypes.object.isRequired,
  };

  state = { animate: new Animated.Value(0) };

  componentDidMount() {
    const { item } = this.props;

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
    const { viewing } = this.props;
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
          <main>
            <StripedHero
              viewing={this.props.viewing}
              els={[1, 2]}
              type="movie"
            />
            <Showcase {...this.props} />
          </main>
        </div>
        <div>
          <Footer
            content={{
              subtitle: "Wrong Movie?",
              title: "Try another search.",
            }}
          />
        </div>
        {viewing === "loading" && <LoaderBar />}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  item: getItem(state),
  viewing: getViewing(state),
});

export default connect(mapStateToProps, null)(MoviePage);
