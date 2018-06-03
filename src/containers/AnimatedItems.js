import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TransitionGroup from "react-transition-group/TransitionGroup";
import * as Animated from "animated/lib/targets/react-dom";
import { bindActionCreators } from "redux";
import { Image, TableItem } from "../components";
import { requestDetails } from "../services/details/actions";
import { getItems } from "../services/gallery/selectors";

class AnimatedItems extends Component {
  state = {
    animations: [],
    items: [],
  };

  _renderItems = items => {
    this.setState(
      state => ({
        ...state,
        items,
        animations: items.map(
          (_, i) => new Animated.Value(0)
        ),
      }),
      () => {
        Animated.stagger(
          100,
          this.state.animations.map(anim =>
            Animated.spring(anim, { toValue: 1 })
          )
        ).start();
      }
    );
  };

  componentDidMount() {
    this._renderItems(this.props.items);
  }

  componentWillReceiveProps(nextProps) {
    let isNewPayload = Boolean(
      !this.props.items.length && nextProps.items.length
    );
    if (isNewPayload) {
      this._renderItems(nextProps.items);
    }
  }

  _animCB = (item, i) => {
    const style = {
      opacity: this.state.animations[i],
      transform: Animated.template`
								translate3d(0,${this.state.animations[i].interpolate({
                  inputRange: [0, 1],
                  outputRange: ["12px", "0px"],
                })},0)
							`,
    };
    return (
      <Animated.div style={style}>
        <TableItem
          index={i}
          item={item}
          displayText="View"
          requestDetails={() =>
            this.props.requestDetails(item)
          }
        />
      </Animated.div>
    );
  };

  render() {
    const { render, items } = this.props;
    return (
      <TransitionGroup component="ul">
        {render({
          animatedItems: this.state.items,
          cb: this._animCB,
        })}
      </TransitionGroup>
    );
  }
}

const mapStateToProps = (state, props) => ({
  items: getItems(state),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      requestDetails,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(
  AnimatedItems
);
