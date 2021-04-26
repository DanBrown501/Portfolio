import React, { useState } from "react";

const TopicSelectionForm = ({ submitChoice }) => {
  const [topic, setTopic] = useState("React");

  const handleChange = (e) => {
    setTopic(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitChoice(topic);
  };

  return (
    <div className="TopicSelectionForm-container">
      <h3 className="TopicSelectionForm-h3">
        Select a topic to learn about.
        <form className="TopicSelectionForm-form">
          <div className="TopicSelectionForm-inline-form">
            <div className="TopicSelectionForm-group">
              <label htmlFor="topic"></label>
              <select
                value={topic}
                id="topic"
                name="topic"
                onChange={handleChange}
              >
                <option value="Larry">Larry</option>
                <option value="Tag">Tag</option>
                <option value="Pickle">Pickle</option>
              </select>
            </div>
          </div>
        </form>
      </h3>
      <button className="btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default TopicSelectionForm;