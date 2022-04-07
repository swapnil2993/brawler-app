import React from "react";
import {  NavLink } from "react-router-dom";
import BrawlerList from './list/list'
import './style.css'

const Brawlers = () => {
  const list = [
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
  ];
  return (
    <div className="main-container">
      <NavLink to="/brawlers/create" className="create-brawler-btn">Create New Brawler</NavLink>
      <BrawlerList list={list}/>
    </div>
  );
};

export default Brawlers;
