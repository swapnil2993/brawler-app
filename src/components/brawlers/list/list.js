import React from "react";
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
        {list.map((item) => (
          <Brawler key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default BrawlerList;
