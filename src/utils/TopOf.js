import React from "react";

export default ({ comp: Comp }) => {
  document.documentElement.scrollTop = 0;
  return <Comp />;
};
