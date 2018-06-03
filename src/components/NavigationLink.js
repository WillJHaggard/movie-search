import React, { Component } from "react";
import { string, object } from "prop-types";
import { Link } from "react-router-dom";

const NavigationLink = ({
  route,
  to,
  text,
  style,
  className,
}) =>
  route === to ? (
    <span {...{ style, className }}>{text}</span>
  ) : (
    <Link {...{ style, className }} to={to}>
      {text}
    </Link>
  );

NavigationLink.defaultProps = {
  route: "",
  to: "",
  text: "Link Text",
  className: "",
  style: {
    textDecoration: "inherit",
    color: "inherit",
  },
};

NavigationLink.propTypes = {
  route: string.isRequired,
  to: string.isRequired,
};

export default NavigationLink;
