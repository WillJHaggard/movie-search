import React from "react";
import { withRouter } from "react-router-dom";
import * as Animated from "animated/lib/targets/react-dom";
import NavigationLink from "../NavigationLink";
import styles from "./styles.scss";

const Header = ({
  location: { pathname },
  goBackStyle = {},
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

export default withRouter(Header);
