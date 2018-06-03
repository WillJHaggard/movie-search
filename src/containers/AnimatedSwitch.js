import React from "react";
import * as PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import * as Animated from "animated/lib/targets/react-dom";

class AnimatedSwitch extends Switch {
  static propTypes = {
    location: PropTypes.object.isRequired,
    key: PropTypes.number.isRequired,
  };

  static defaultProps = {
    location: {},
    key: 0,
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
