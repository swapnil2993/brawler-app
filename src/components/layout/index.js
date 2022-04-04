import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../header";
import Home from "../home";
import "./styles.css"

export default function Layout() {
  return (
    <>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}
