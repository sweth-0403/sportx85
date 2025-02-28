import React, { useState } from "react";
import "./Experience.css"; // Import your CSS file

const Experience = () => {
  const [showModal, setShowModal] = useState(false);
  const [experienceData, setExperienceData] = useState(null);
  const [formData, setFormData] = useState({
    company: "",
    role: "",
    duration: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExperienceData(formData); // Save the experience data
    setShowModal(false);
  };

  return (
    <div className="experience-container">
      <div className="experience-header">
        <h2>Work Experience</h2>
        {!experienceData ? (
          <button className="add-exp-btn" onClick={() => setShowModal(true)}>
            Add Experience
          </button>
        ) : (
          <button className="edit-exp-btn" onClick={() => setShowModal(true)}>
            Edit Experience
          </button>
        )}
      </div>

      {/* Display Experience Data */}
      {experienceData && (
        <div className="experience-display">
          <h3>Company: {experienceData.company}</h3>
          <p>Role: {experienceData.role}</p>
          <p>Duration: {experienceData.duration}</p>
        </div>
      )}

      {/* Modal Form */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add Work Experience</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Role</label>
                <input
                  type="text"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  Save Experience
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Experience;
