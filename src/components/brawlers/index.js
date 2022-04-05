import React from "react";
import {  NavLink } from "react-router-dom";
import BrawlerList from './list/list'
import './style.css'

const Brawlers = () => {
  return (
    <div className="main-container">
      <NavLink to="/brawlers/create" className="create-brawler-btn">Create New Brawler</NavLink>
      <BrawlerList />
    </div>
  );
};

export default Brawlers;
