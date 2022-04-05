import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Brawler = ({ item }) => {
  return (
    <li className="brawler-container">
      <span className="col-1">{item.id}</span>
      <span className="col-2">{item.name}</span>
      <button className="col-3">x</button>
    </li>
  );
};

Brawler.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    power: PropTypes.number,
    health: PropTypes.number,
    name: PropTypes.string.isRequired,
    type: PropTypes.string
  }),
};

export default Brawler;
