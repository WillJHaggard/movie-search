import React from "react";

const Header = () => (
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
          color: "white",
          position: "absolute",
          top: 5,
          left: 0,
          fontWeight: "400",
          fontSize: "30px",
          lineHeight: "50px",
        }}
      >
        Movie Search
      </h1>
    </nav>
  </div>
);

export default Header;
