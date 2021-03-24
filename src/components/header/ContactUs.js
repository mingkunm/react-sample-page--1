import React, { useState } from "react";

function ContactUs() {
  const [hoverColor, setHoverColor] = useState("white");
  const [hoverCursor, setHoverCursor] = useState("");

  const style = {
    width: "8.688rem",
    height: "2.7rem",
    padding: "0.7rem 0.063rem 0.7rem 0",
    border: `solid 1px ${hoverColor}`,
    fontSize: "0.938rem",
    fontWeight: "bold",
    fontStretch: "normal",
    textAlign: "center",
    color: `${hoverColor}`,
    cursor: `${hoverCursor}`,
    transition: "0.2s ease",
  };

  return (
    <div
      className="fade-left"
      style={style}
      onMouseEnter={() => {
        setHoverColor("#ffc004");
        setHoverCursor("pointer");
      }}
      onMouseLeave={() => setHoverColor("white")}
    >
      Contact Us
    </div>
  );
}

export default ContactUs;
