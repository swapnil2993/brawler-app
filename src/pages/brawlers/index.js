import React, { useEffect, useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import BrawlerList from "../../components/brawlers/list/list";
import { fetchBrawlers } from "../../services";
import "./style.css";

const Brawlers = () => {
  const [list, setList] = useState([]);
  const fetchData = useCallback(async () => {
    const data = await fetchBrawlers();
    setList(data);
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);
  return (
    <div className="main-container">
      <NavLink to="/brawlers/create" className="create-brawler-btn">
        Create New Brawler
      </NavLink>
      <BrawlerList list={list} />
    </div>
  );
};

export default Brawlers;
