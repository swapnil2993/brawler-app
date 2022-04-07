import React, { useState } from "react";
import Input from "./input";
import "./style.css";

const validateFormData = (data) => {
  if(data.name === ""){
    return false
  }
  if(data.health < 0 || data.power < 0){
    return false
  }
  return true
};

const brawlerTypes = [
  { label: "Rare", value: "rare" },
  { label: "Common", value: "common" },
  { label: "Very Rare", value: "very-rare" },
];

const BrawlerForm = ({
  onSubmit,
  initialData = {
    name: "",
    health: 0,
    power: 0,
    type: "common",
  },
}) => {
  const [formData, setFormData] = useState({ ...initialData });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validateFormData(formData)){
      onSubmit(formData);
      setFormData({ ...initialData });
    }
  };

  const resetForm = () => {
    setFormData({ ...initialData });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-container">
        <div className="form-element">
          <Input
            value={formData.name}
            label="Name"
            name="name"
            onChange={onChange}
            required
          />
        </div>
        <div className="form-element">
          <Input
            label="Health"
            name="health"
            type="number"
            value={formData.health}
            onChange={onChange}
            required
            min="1"
          />
        </div>
        <div className="form-element">
          <Input
            label="Power"
            name="power"
            type="number"
            value={formData.power}
            onChange={onChange}
            required
            min="1"
          />
        </div>
        <div className="form-element">
          <label className="select-label" htmlFor="type">
            Type
          </label>
          <select
            className="single-select"
            name="type"
            id="type"
            value={formData.type}
            onChange={onChange}
          >
            {brawlerTypes.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </div>
        <div className="form-element col">
          <button
            type="button"
            onClick={resetForm}
            className="form-secondary-btn"
          >
            Clear
          </button>
          <button type="submit" className="form-primary-btn">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default BrawlerForm;
