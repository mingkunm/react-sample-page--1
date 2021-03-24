import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BsArrowRight } from "react-icons/bs";

function CTA() {
  // Get CTA content from redux
  const page = useSelector((state) => state.page);
  const content = useSelector((state) => state.data[page - 1]);

  // Lets talk hover
  const [hover, setHover] = useState({
    color: "#000000",
    arrowPosition: "10px",
    cursor: "",
  });

  const CTAContainerStyle = {
    padding: "9vh 0",
    backgroundColor: "white",
    height: "100%",
    display: "flex",
    alignItems: "center",
  };

  const CTALeft = {
    width: "60%",
    margin: "0 15% 0 7%",
    fontSize: "1.5rem",
    fontWeight: "bold",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.33",
    letterSpacing: "-0.63px",
    color: "#000000",
  };

  const LetsTalk = {
    width: "20%",
    marginRight: "12%",
    fontSize: "0.688rem",
    fontWeight: "600",
    fontStretch: "normal",
    fontStyle: "normal",
    lineHeight: "1.82",
    letterSpacing: "1px",
    color: hover.color,
    display: "flex",
    cursor: hover.cursor,
    whiteSpace: "nowrap",
    transition: "0.2s ease",
  };

  return (
    <div className="fade-up " style={{ width: "100%" }}>
      <div key={page} style={CTAContainerStyle}>
        <div style={CTALeft}>{content.blocks[0].cta}</div>
        <div
          style={LetsTalk}
          onMouseEnter={() =>
            setHover({
              color: "#ffc004",
              arrowPosition: "15px",
              cursor: "pointer",
            })
          }
          onMouseLeave={() => {
            setHover({
              color: "#000000",
              arrowPosition: "10px",
            });
          }}
        >
          <span style={{}}>LET'S TALK.</span>
          <BsArrowRight
            size="20px"
            style={{ color: "#ffc004", marginLeft: hover.arrowPosition }}
          />
        </div>
      </div>
    </div>
  );
}

export default CTA;
