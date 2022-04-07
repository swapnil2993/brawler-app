import React from "react";
import "./style.css";

const displayOrder = ["id","name", "health", "power", "type"];

const Details = () => {
  const item = {
    id: 1,
    name: "Barley",
    power: 400,
    health: 500,
    type: "Rare",
  };
  return (
    <div className="wrapper">
      <h1>Brawler Details</h1>
      <div className="details-container">
        <dl className="attributes">
          {displayOrder.map((key) => (
            <React.Fragment key={key}>
              <dt>{key}</dt>
              <dd>{item[key]}</dd>
            </React.Fragment>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Details;
