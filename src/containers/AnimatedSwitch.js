// Extenral Deps
import React from "react";
import * as PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import * as Animated from "animated/lib/targets/react-dom";

/**
  Class that extends Switch to hook into ReactTransitionGroup's cycle events
  for routes in react-router

  Normally, there is no need for extended hierarchies in React by way of composition.
  This is a one-off case for animating lifecycle methods.
*/
class AnimatedSwitch extends Switch {
  static propTypes = {
    // location given from render prop of Route component at Root
    location: PropTypes.object.isRequired,
  };

  static defaultProps = {
    location: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      animate: new Animated.Value(0),
    };
  }
  componentWillAppear(cb) {
    setTimeout(
      () =>
        Animated.spring(this.state.animate, {
          toValue: 1,
        }).start(),
      250
    );
    cb();
  }
  componentWillEnter(cb) {
    setTimeout(
      () =>
        Animated.spring(this.state.animate, {
          toValue: 1,
        }).start(),
      250
    );
    cb();
  }
  componentWillLeave(cb) {
    Animated.spring(this.state.animate, {
      toValue: 0,
    }).start();
    setTimeout(() => cb(), 100);
  }
  render() {
    const style = {
      opacity: Animated.template`${this.state.animate}`,
      transform: Animated.template`
				translate3d(0,${this.state.animate.interpolate({
          inputRange: [0, 1],
          outputRange: ["12px", "0px"],
        })},0)
			`,
    };
    return (
      <Animated.div
        style={style}
        className="animated-page-wrapper"
      >
        {super.render()}
      </Animated.div>
    );
  }
}

export default AnimatedSwitch;
