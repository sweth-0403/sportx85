import React, { useState } from "react";
import "./Education.css"; // Import your CSS here

const Education = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    degree: "",
    school: "",
    fieldOfStudy: "",
    startDate: "",
    endDate: "",
    grade: "",
    description: "",
  });

  const [educationData, setEducationData] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEducationData(formData); // Save the education data
    setShowModal(false); // Close modal
  };

  const handleEdit = () => {
    setShowModal(true); // Show modal again for editing
  };

  return (
    <div className="education">
      <div className="education-header">
        <h2>Education</h2>
        {!educationData ? (
          <button
            className="add-education-btn"
            onClick={() => setShowModal(true)}
          >
            Add Education
          </button>
        ) : (
          <button className="edit-education-btn" onClick={handleEdit}>
            Edit Education
          </button>
        )}
      </div>

      {/* Display saved education details */}
      {educationData && (
        <div className="education-details">
          <div className="education-info">
            <h4>Degree: {educationData.degree}</h4>
            <p>School : {educationData.school}</p>
            <p>Field Of Study : {educationData.fieldOfStudy}</p>
            <p>
              {educationData.startDate} - {educationData.endDate}
            </p>
            <p> Grade : {educationData.grade}</p>
            <p>{educationData.description}</p>
          </div>
        </div>
      )}

      {/* Modal Form */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add Education</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Degree</label>
                <input
                  type="text"
                  name="degree"
                  value={formData.degree}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>School</label>
                <input
                  type="text"
                  name="school"
                  value={formData.school}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Field of Study</label>
                <input
                  type="text"
                  name="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Start Date</label>
                <input
                  type="month"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>End Date</label>
                <input
                  type="month"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Grade</label>
                <input
                  type="text"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  Save Education
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

export default Education;
