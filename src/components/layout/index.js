import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../header";
import Home from "../home";
import Brawlers from "../brawlers";
import "./styles.css";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/brawlers" element={<Brawlers/>} />
          <Route exact path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </main>
    </>
  );
}
