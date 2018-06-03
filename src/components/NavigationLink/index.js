// Extenral Deps
import React from "react";
import * as PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Intenral Deps
import styles from "./styles.scss";

/**
  HOC that wraps react-router Link element for calling functions
  react-router-redux seems to have issues when current version for calling 'push'
  in action creators so this works just as well

  Used specifically for being the point of contact for services/details/actions
*/
const NavigationLink = ({
  route,
  to,
  text,
  style,
  className,
  cb,
}) =>
  route === to ? (
    <span {...{ style, className }}>{text}</span>
  ) : (
    <Link onClick={cb} {...{ style, className }} to={to}>
      {text}
    </Link>
  );

NavigationLink.defaultProps = {
  route: "",
  to: "",
  text: "Link Text",
  className: styles.anchor_reset,
  style: {},
  cb: () => null,
};

NavigationLink.propTypes = {
  // current route for comparison
  route: PropTypes.string.isRequired,
  // the route you want the link to navigate to
  to: PropTypes.string.isRequired,
  // a side effect to be exceuted at the same time the link is active
  cb: PropTypes.func.isRequired,
};

export default NavigationLink;
