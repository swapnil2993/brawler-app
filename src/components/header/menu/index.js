import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import "./menu.css";

const Menu = ({ items }) => {
  const location = useLocation();
  return (
    <ul className="menu">
      {items.map((item) => (
        <li
          key={item.path}
          className={`menu-item${
            location.pathname === item.path ? " active" : ""
          }`}
        >
          <Link to={item.path}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );
};

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Menu.defaultProps = {
  items: [
    {
      path: "/home",
      text: "Home",
    },
    {
      path: "/brawlers",
      text: "Brawlers",
    },
  ],
};

export default Menu;
