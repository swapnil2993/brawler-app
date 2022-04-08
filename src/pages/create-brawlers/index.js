import React from "react";
import { useNavigate } from "react-router-dom";
import BrawlerForm from "../../components/brawlers/form";
import { createBrawler } from "../../services";
import "./style.css";

const CreateBrawler = () => {
  const navigate = useNavigate();
  const handleSubmit = async (data) => {
    const response = await createBrawler(data);
    if (response.status === 201) {
      navigate("/brawlers");
    }
  };
  return (
    <div className="create-brawler-container">
      <h1>Create Brawler</h1>
      <BrawlerForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateBrawler;
