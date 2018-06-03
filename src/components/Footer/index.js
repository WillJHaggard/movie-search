// External Deps
import React from "react";
import * as PropTypes from "prop-types";
// Internal Deps
import smoothScroll from "../../utils/smoothScroll";
import styles from "./footer.scss";

/**
  Simple component that pushes user to the top of the document by clicking the arrow
*/
const Footer = ({ content: { subtitle, title } }) => (
  <footer className={styles.footer}>
    <div className={styles.footer_container}>
      <div className={styles.footer_copy}>
        <h1 className={styles.footer_title}>
          <span className={styles.footer_subtitle}>
            {subtitle}
          </span>
          {title}
        </h1>
      </div>
      <div className={styles.footer_up}>
        <span
          className={styles.footer_up_arrow}
          onClick={() => smoothScroll()}
        >
          &#8593;
        </span>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  // content object is used to place text from scene container
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }),
};

Footer.defaultProps = {
  content: {
    title: "Footer Title",
    subtitle: "Footer Subtitle",
  },
};

export default Footer;
