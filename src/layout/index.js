import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../components/header";
import Home from "../pages/home";
import Brawlers from "../pages/brawlers";
import "./styles.css";
import CreateBrawler from "../pages/create-brawlers";
import Details from "../pages/details";
import EditBrawler from "../pages/edit-brawlers";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Routes>
            <Route index path="/home" element={<Home />} />
            <Route path="/brawlers" element={<Brawlers />} />
            <Route path="/brawlers/create" element={<CreateBrawler />} />
            <Route exact path="/brawlers/:id" element={<Details />} />
            <Route exact path="/brawlers/:id/edit" element={<EditBrawler />} />
            <Route exact path="/" element={<Navigate replace to="/home" />} />
          </Routes>
        </div>
      </main>
    </>
  );
}
