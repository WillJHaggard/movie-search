import React from "react";
import * as PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./styles.scss";

const NavigationLink = ({
  route,
  to,
  text,
  style,
  className,
  cb,
}) => {
  return route === to ? (
    <span {...{ style, className }}>{text}</span>
  ) : (
    <Link onClick={cb} {...{ style, className }} to={to}>
      {text}
    </Link>
  );
};

NavigationLink.defaultProps = {
  route: "",
  to: "",
  text: "Link Text",
  className: styles.anchor_reset,
  style: {},
  cb: () => null,
};

NavigationLink.propTypes = {
  route: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  cb: PropTypes.func.isRequired,
};

export default NavigationLink;
