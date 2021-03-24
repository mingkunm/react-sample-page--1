import React from "react";
import { useSelector } from "react-redux";

function Content() {
  // Get headline & subhead content from redux
  const page = useSelector((state) => state.page);
  const content = useSelector((state) => state.data[page - 1]);

  const contentStyle = {
    padding: "8vh 0",
    minHeight: "34vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    fontStretch: "normal",
    color: "white",
    width: "100%",
  };

  const headlineStyle = {
    padding: "2vh 0",
    fontSize: "5.25rem",
    fontWeight: "bold",
    lineHeight: 1,
    letterSpacing: "-2.2px",
    flexBasis: "42.5%",
    flexGrow: 9999,
    marginRight: "12%",
  };

  const subheadStyle = {
    padding: "2vh 0",
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: "1.86",
    letterSpacing: "normal",
    flexBasis: "25%",
    flexGrow: 1,
    marginRight: "3%",
  };

  return (
    <div style={contentStyle}>
      <div style={headlineStyle} className="fade-right" key={page + 1}>
        {content.blocks[0].headline}
      </div>
      <div style={subheadStyle} className="fade-left" key={page + 2}>
        {content.blocks[0].subhead}
      </div>
    </div>
  );
}

export default Content;
