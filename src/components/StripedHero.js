import React from "react";

const StripedHero = ({ els }) => (
  <header>
    <div className="stripes">
      {els.map((_, i) => <span key={`0.${i}`} />)}
    </div>
  </header>
);

export default StripedHero;
