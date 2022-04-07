import React from "react";
import PropTypes from "prop-types";
import Brawler from "./brawler";
import "./style.css";

const BrawlerList = ({ list }) => {
  return (
    <>
      <div className="list-header">
        <span className="id-col-header">#Id</span>
        <span className="name-col-header">Name</span>
        <span className="actions-col-header">Actions</span>
      </div>
      <ul>
        {list.length > 0 ? (
          list.map((item) => <Brawler key={item.id} item={item} />)
        ) : (
          <div>No brawlers to display</div>
        )}
      </ul>
    </>
  );
};

BrawlerList.propTypes = {
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

export default BrawlerList;
