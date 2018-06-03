// Extenral Deps
import React from "react";
import * as PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import * as Animated from "animated/lib/targets/react-dom";
// Intenral Deps
import NavigationLink from "../NavigationLink";
import styles from "./styles.scss";

/**
  Simple navigation header wrapped withRouter for props from location state
*/
const Header = ({
  location: { pathname },
  goBackStyle,
  content: { title },
}) => (
  <div className={styles.header_container}>
    <nav>
      <h1
        className={styles.header_display}
        style={{
          color: `${
            pathname !== "/" ? "#3a3a3a" : "white"
          }`,
        }}
      >
        <NavigationLink
          to={"/"}
          route={pathname}
          text={
            <Animated.span style={goBackStyle}>
              {title}
            </Animated.span>
          }
        />
      </h1>
    </nav>
  </div>
);

Header.propTypes = {
  // location from router to tell the component where it currently is on render
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  // content for displaying prop of text
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
  // animated style to be used with Animated.span
  goBackStyle: PropTypes.object,
};

Header.defaultProps = {
  location: {
    pathname: "",
  },
  content: { title: "Movie Search" },
  goBackStyle: {},
};

export default withRouter(Header);
