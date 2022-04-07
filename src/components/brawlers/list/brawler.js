import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Brawler = ({ item, onDeleteAction, onEditAction, handleNavigate }) => {
  return (
    <li className="brawler-container">
      <span className="id-col">{item.id}</span>
      <span className="name-col" onClick={(e) => handleNavigate(item.id)}>
        {item.name}
      </span>
      <button
        className="button delete-button"
        onClick={(e) => onDeleteAction(item.id)}
      >
        Delete
      </button>
      <button
        className="button edit-button"
        onClick={(e) => onEditAction(item.id)}
      >
        Edit
      </button>
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
  onDeleteAction: PropTypes.func.isRequired,
  onEditAction: PropTypes.func.isRequired,
  handleNavigate: PropTypes.func.isRequired,
};

export default Brawler;
