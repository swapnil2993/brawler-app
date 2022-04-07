import React from "react";
import PropTypes from "prop-types";
import Brawler from "./brawler";
import "./style.css";

const BrawlerList = ({ list, handleDelete, handleEdit, handleNavigate }) => {
  return (
    <>
      <div className="list-header">
        <span className="id-col-header">#Id</span>
        <span className="name-col-header">Name</span>
        <span className="actions-col-header">Actions</span>
      </div>
      <ul className="list-items">
        {list.length > 0 ? (
          list.map((item) => (
            <Brawler
              key={item.id}
              item={item}
              onDeleteAction={handleDelete}
              onEditAction={handleEdit}
              handleNavigate={handleNavigate}
            />
          ))
        ) : (
          <div>No brawlers to display</div>
        )}
      </ul>
    </>
  );
};

BrawlerList.propTypes = {
  handleDelete: PropTypes.func,
  handleNavigate: PropTypes.func,
  handleEdit: PropTypes.func,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      power: PropTypes.number,
      health: PropTypes.number,
      name: PropTypes.string.isRequired,
      type: PropTypes.string,
    })
  ).isRequired,
};

BrawlerList.defaultProps = {
  handleDelete: () => {},
  handleNavigate: () => {},
  handleEdit: () => {},
};

export default BrawlerList;
