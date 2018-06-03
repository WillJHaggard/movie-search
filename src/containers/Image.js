// Extenral Deps
import React, { Component } from "react";
import * as PropTypes from "prop-types";

/**
  Quick and simple HOC for img tags to hook into onLoad
  for queries that yield bad/malformed/not loaded Poster src
*/
class Image extends Component {
  static propTypes = {
    // required for img
    src: PropTypes.string.isRequired,
    // required for accessibility
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: "",
  };

  state = {
    hasLoaded: false,
  };

  handleLoad = () => {
    this.setState({ hasLoaded: true });
  };

  render() {
    const { hasLoaded } = this.state;
    const { src, alt, className } = this.props;

    if (hasLoaded && src) {
      return (
        <img src={src} alt={alt} className={className} />
      );
    }

    return (
      <div
        className={`${className}`}
        style={{ backgroundColor: "#efefef" }}
      >
        <img
          onLoad={this.handleLoad}
          src={src}
          alt={alt}
          style={{
            display: "none",
          }}
        />
      </div>
    );
  }
}

export default Image;
