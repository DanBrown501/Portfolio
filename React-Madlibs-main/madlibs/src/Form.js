import React, { useState } from "react";

const Form = ({ addNewWords }) => {
  const initialState = { adj1: "", noun1: "", noun2: "" };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewWords(formData);
    setFormData(initialState);
  };

  return (
    <div className="Form-container">
      <h3 className="Form-h3">Enter a random word.</h3>
      <form className="Form" onSubmit={handleSubmit}>
        <div className="Form-group">
          <label htmlFor="adj1">Adjective</label>
          <input
            id="adj1"
            name="adj1"
            placeholder="adjective"
            type="text"
            value={formData.adj1}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="Form-group">
          <label htmlFor="noun1">Noun</label>
          <input
            id="noun1"
            name="noun1"
            placeholder="Noun"
            type="text"
            value={formData.noun1}
            onChange={handleChange}
            required
          ></input>
        </div>
        <div className="Form-group">
          <label htmlFor="noun2">Noun</label>
          <input
            id="noun2"
            name="noun2"
            placeholder="Noun"
            type="text"
            value={formData.noun2}
            onChange={handleChange}
            required
          ></input>
        </div>
        <button className="btn">Make story!</button>
      </form>
    </div>
  );
};

export default Form; 