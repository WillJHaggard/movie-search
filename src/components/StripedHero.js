import React from "react";

const StripedHero = ({ els, viewing }) => (
  <header>
    <div data-state={viewing} className="stripes">
      {els.map((_, i) => (
        <span data-state={viewing} key={`0.${i}`} />
      ))}
    </div>
  </header>
);

export default StripedHero;
