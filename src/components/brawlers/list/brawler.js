import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Brawler = ({ item, onDeleteAction }) => {
  return (
    <li className="brawler-container">
      <span className="id-col">{item.id}</span>
      <span className="name-col">{item.name}</span>
      <button onClick={onDeleteAction}>Delete</button>
    </li>
  );
};

Brawler.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    power: PropTypes.number,
    health: PropTypes.number,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
  }),
  onDeleteAction: PropTypes.func
};

export default Brawler;
