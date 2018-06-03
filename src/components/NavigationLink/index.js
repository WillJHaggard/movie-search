import React, { Component } from "react";
import { string, object } from "prop-types";
import { Link } from "react-router-dom";
import styles from "./styles.scss";

const NavigationLink = ({
  route,
  to,
  text,
  style,
  className,
  cb = null,
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
};

NavigationLink.propTypes = {
  route: string.isRequired,
  to: string.isRequired,
};

export default NavigationLink;
