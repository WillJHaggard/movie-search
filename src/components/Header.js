import React from "react";
import { withRouter } from "react-router-dom";
import * as Animated from "animated/lib/targets/react-dom";
import NavigationLink from "./NavigationLink";

const Header = ({
  location: { pathname },
  goBackStyle = {},
  content: { title },
}) => (
  <div
    style={{
      padding: 0,
      maxWidth: "95%",
      margin: "0 auto",
    }}
  >
    <nav>
      <h1
        style={{
          color: `${
            pathname !== "/" ? "#3a3a3a" : "white"
          }`,
          position: "absolute",
          top: 5,
          left: 0,
          fontWeight: "400",
          fontSize: "30px",
          lineHeight: "50px",
          zIndex: 100,
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
