// Extenral Deps
import React, { Component } from "react";
import * as PropTypes from "prop-types";
import { connect } from "react-redux";
import TransitionGroup from "react-transition-group/TransitionGroup";
import * as Animated from "animated/lib/targets/react-dom";
import { bindActionCreators } from "redux";
// Intenral Deps
import { TableItem } from "../components";
import { requestDetails } from "../services/details/actions";
import { getItems } from "../services/gallery/selectors";

/**
  Render prop component that takes in props.items, puts them in local state, puts the same number
  of Animated.Values in state as animations, then staggers appearance on
  didMount and WillReceiveProps.
*/
class AnimatedItems extends Component {
  static propTypes = {
    // array of items received at state.gallery.items
    items: PropTypes.array.isRequired,
    // action creator that starts servies/details/sagas for more item data
    requestDetails: PropTypes.func.isRequired,
  };

  static defaultProps = {
    items: [],
  };

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
    const { render } = this.props;
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
