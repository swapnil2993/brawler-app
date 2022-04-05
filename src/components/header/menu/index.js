import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./menu.css";

const Menu = ({ items }) => {
  return (
    <ul className="menu">
      {items.map((item) => (
        <li key={item.path} className="menu-item">
          <NavLink to={item.path} activeclassname="active">
            {item.text}
          </NavLink>
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
