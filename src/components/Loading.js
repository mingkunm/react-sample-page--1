import React from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

function Loading() {
  const style = {
    backgroundColor: "#282c34",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={style}>
      <PropagateLoader color="white" />
    </div>
  );
}

export default Loading;
