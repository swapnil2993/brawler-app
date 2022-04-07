import React, { useEffect, useCallback, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BrawlerForm from "../../components/brawlers/form";
import { fetchBrawlerDetails, updateBrawler } from "../../services";
import "./style.css";

const EditBrawler = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  const fetchData = useCallback(async (id) => {
    const response = await fetchBrawlerDetails(id);
    setDetails(response);
  }, []);

  useEffect(() => {
    fetchData(id);
  }, [fetchData, id]);

  const handleSubmit = async (data) => {
    const response = await updateBrawler(id,data);
    if (response) {
      navigate("/brawlers");
    }
  };
  return (
    <div className="edit-brawler-container">
      <h1>Edit Brawler</h1>
      {details ? (
        <BrawlerForm onSubmit={handleSubmit} initialData={details} />
      ) : (
        <div>Loading the form to edit</div>
      )}
    </div>
  );
};

export default EditBrawler;
