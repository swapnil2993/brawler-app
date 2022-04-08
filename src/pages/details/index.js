import React, { useEffect, useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchBrawlerDetails } from "../../services";
import "./style.css";

const displayOrder = ["id", "name", "health", "power", "type"];

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  const fetchData = useCallback(async (id) => {
    const response = await fetchBrawlerDetails(id);
    setDetails(response);
  }, []);

  const handleBack = ()=>{
    navigate("/brawlers")
  }

  useEffect(() => {
    fetchData(id);
  }, [fetchData, id]);

  return (
    <div className="wrapper">
      <h1>Brawler Details</h1>
      <div className="details-container">
        {details ? (
          <dl className="attributes">
            {displayOrder.map((key) => (
              <React.Fragment key={key}>
                <dt>{key}</dt>
                <dd>{details[key]}</dd>
              </React.Fragment>
            ))}
          </dl>
        ) : (
          <div>Something went wrong while fetching data</div>
        )}
      </div>
      <button className="back-button" onClick={handleBack}>Back</button>
    </div>
  );
};

export default Details;
