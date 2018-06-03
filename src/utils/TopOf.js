// External Deps
import React from "react";

/**
  Wraps comp assigned as Comp, puts user at top of document, and renders <Comp/>
*/
export default ({ comp: Comp }) => {
  document.documentElement.scrollTop = 0;
  return <Comp />;
};
