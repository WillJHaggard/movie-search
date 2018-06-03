import React from "react";
import { Link } from "react-router-dom";
import * as Animated from "animated/lib/targets/react-dom";

const Header = ({
  viewing,
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
            viewing === "movie" ? "#3a3a3a" : "white"
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
        <Link
          to={"/"}
          style={{
            color: "inherit",
            textDecoration: "inherit",
          }}
        >
          <Animated.span style={goBackStyle}>
            {title}
          </Animated.span>
        </Link>
      </h1>
    </nav>
  </div>
);

export default Header;
