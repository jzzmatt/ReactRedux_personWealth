import React from "react";

const Layout = (props) => {
  const style = {
    display: "flex",
    flexFlow: "row"
  };
  return <div style={style}>{props.children}</div>;
};

export default Layout;
