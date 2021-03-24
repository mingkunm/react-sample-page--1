import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Menu() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);

  const setPage = (payload) => {
    dispatch({ type: "SET_PAGE", payload });
  };

  const menuStyle = {
    marginTop: "2vh",
    fontSize: "0.875rem",
    fontWight: "bold",
    lineHeight: "1.625rem",
    letterSpacing: "normal",
    color: "white",
  };

  return (
    <ul style={menuStyle} className="fade-right">
      <li
        style={page === 1 ? { color: "#ffc004" } : {}}
        className="menu-item"
        onClick={() => setPage(1)}
      >
        Industries
      </li>
      <li
        style={page === 2 ? { color: "#ffc004" } : {}}
        className="menu-item"
        onClick={() => setPage(2)}
      >
        Services
      </li>
      <li
        style={page === 3 ? { color: "#ffc004" } : {}}
        className="menu-item"
        onClick={() => setPage(3)}
      >
        About Us
      </li>
    </ul>
  );
}

export default Menu;
