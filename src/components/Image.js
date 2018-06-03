import React, { Component } from "react";
import * as PropTypes from "prop-types";

class Image extends Component {
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

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

Image.defaultProps = {
  className: "",
};

export default Image;
