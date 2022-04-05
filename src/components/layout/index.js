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
      <main>
        <div className="container">
          <Routes>
            <Route index path="/home" element={<Home />} />
            <Route path="/brawlers" element={<Brawlers />}/>
            <Route path="/brawlers/create" element={<>Create Brawler</>}/>
            <Route path="/brawlers/details/:id" element={<>Details</>}/>
            <Route exact path="/" element={<Navigate replace to="/home" />} />
          </Routes>
        </div>
      </main>
    </>
  );
}
