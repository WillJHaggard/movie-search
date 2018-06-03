import React from "react";
import smoothScroll from "../../utils/smoothScroll";
import Styles from "./footer.scss";

console.log(Styles);

const Footer = ({ content: { subtitle, title } }) => (
  <footer className="ui-footer">
    <div className="ui-footer-container">
      <div className="ui-footer-copy">
        <h1 className="ui-footer-title">
          <span className="ui-footer-subtitle">
            {subtitle}
          </span>
          {title}
        </h1>
      </div>
      <div className="ui-footer-up">
        <span
          className="ui-footer-up-arrow"
          onClick={() => smoothScroll()}
        >
          &#8593;
        </span>
      </div>
    </div>
  </footer>
);

export default Footer;
