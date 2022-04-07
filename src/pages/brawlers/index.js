import React, { useEffect, useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BrawlerList from "../../components/brawlers/list/list";

import { deleteBrawler, fetchBrawlers } from "../../services";
import "./style.css";

const Brawlers = () => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const fetchData = useCallback(async () => {
    const data = await fetchBrawlers();
    setList(data);
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);

  const handleDelete = async (id) => {
    const response = await deleteBrawler(id);
    if (response) {
      setList(list.filter((item) => item.id !== id));
    }
  };

  const handleEdit = (id) => {
    navigate(`/brawlers/${id}/edit`);
  };

  const handleDetailsNavigation = (id) => {
    navigate(`/brawlers/${id}`);
  };

  return (
    <div className="main-container">
      <NavLink to="/brawlers/create" className="create-brawler-btn">
        Create New Brawler
      </NavLink>
      <BrawlerList
        list={list}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleNavigate={handleDetailsNavigation}
      />
    </div>
  );
};

export default Brawlers;
