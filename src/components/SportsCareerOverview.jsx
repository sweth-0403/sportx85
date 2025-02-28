import React, { useState } from "react";
import "./SportsCareerOverview.css"; // Import your CSS file

const SportsCareerOverview = () => {
  const [showModal, setShowModal] = useState(false);
  const [sportsData, setSportsData] = useState(null);
  const [formData, setFormData] = useState({
    achievement: "",
    certification: "",
    matchesPlayed: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSportsData(formData); // Save the sports data
    setShowModal(false);
  };

  return (
    <div className="sports-career-overview">
      <div className="sports-header">
        <h2>Sports Career Overview</h2>
        {!sportsData ? (
          <button className="add-sports-btn" onClick={() => setShowModal(true)}>
            Add Details
          </button>
        ) : (
          <button
            className="edit-sports-btn"
            onClick={() => setShowModal(true)}
          >
            Edit Details
          </button>
        )}
      </div>

      {/* Display Sports Data */}
      {sportsData && (
        <div className="sports-display">
          <h3>Achievement: {sportsData.achievement}</h3>
          <p>Certification: {sportsData.certification}</p>
          <p>Matches Played: {sportsData.matchesPlayed}</p>
        </div>
      )}

      {/* Modal Form */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add Sports Career Details</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Achievement</label>
                <input
                  type="text"
                  name="achievement"
                  value={formData.achievement}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Certification</label>
                <input
                  type="text"
                  name="certification"
                  value={formData.certification}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Matches Played</label>
                <input
                  type="number"
                  name="matchesPlayed"
                  value={formData.matchesPlayed}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="submit-btn">
                  Save Details
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

export default SportsCareerOverview;
