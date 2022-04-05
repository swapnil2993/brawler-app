import React from "react";
import Brawler from "./brawler";
import "./style.css";

const BrawlerList = () => {
  return (
    <>
      <div className="list-header">
        <span className="col-1">#Id</span>
        <span className="col-2">Name</span>
        <span className="col-3">Delete</span>
      </div>
      <ul>
        {[
          {
            id: 1,
            name: "Barley", 
            power: 400,
            health: 500,
            type: "Rare",
          },
          {
            id: 2,
            name: "Barley2",
            power: 400,
            health: 500,
            type: "Rare",
          },
        ].map((item) => (
          <Brawler key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
};

export default BrawlerList;
