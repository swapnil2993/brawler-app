import React from "react";
import BrawlerForm from "../../components/brawlers/form";
import "./style.css"

const CreateBrawler = () => {
  return (
    <div className="create-brawler-container">
      <h1>Create Brawler</h1>
      <BrawlerForm />
    </div>
  );
};

export default CreateBrawler;
