import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import TransitionGroup from "react-transition-group/TransitionGroup";
import * as Animated from "animated/lib/targets/react-dom";
import { bindActionCreators } from "redux";
import { Image } from "../../components";
import { requestItemDetails } from "../../services/search/actions";
import { getItems } from "../../services/search/selectors";

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
        <article
          className="dt w-100 bb b--black-05 pb2 mt2"
          key={`0.${i}`}
        >
          <div className="dtc w2 w3-ns v-mid">
            <Image
              src={item.Poster}
              className="ba b--black-10 db br2 w2 w3-ns h2 h3-ns"
              alt={`${item.Title}`}
            />
          </div>
          <div className="dtc v-mid pl3">
            <h1 className="f6 f5-ns fw6 lh-title black mv0">
              {item.Title}{" "}
            </h1>
            <h2 className="f6 fw4 mt0 mb0 black-60">
              {item.Year}
            </h2>
          </div>
          <div className="dtc v-mid">
            <div className="w-100 tr">
              <Link
                style={{ cursor: "default" }}
                to={`/movie/${item.imdbID}`}
              >
                <button
                  className="f6 ui-button-select"
                  onClick={() =>
                    this.props.requestItemDetails(item)
                  }
                >
                  View
                </button>
              </Link>
            </div>
          </div>
        </article>
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
      requestItemDetails,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(
  AnimatedItems
);