import React, { useState } from "react";
import Input from "./input";
import "./style.css";

const initialData = {
  name: "",
  health: 0,
  power: 0,
  type: "common",
};

const brawlerTypes = [
  { label: "Rare", value: "rare" },
  { label: "Common", value: "common" },
  { label: "Very Rare", value: "very-rare" },
];

const BrawlerForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ ...initialData });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ ...initialData });
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
            min="0"
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
            min="0"
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
