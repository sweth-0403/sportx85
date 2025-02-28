import React, { useState } from "react";
import "./Profile.css";

import Education from "/src/components/Education";
import Experience from "/src/components/Experience";
import SportsCareerOverview from "/src/components/SportsCareerOverview";
const Profile = () => {
  const [profileImage, setProfileImage] = useState("/dummy-profile.jpg");
  const [bannerImage, setBannerImage] = useState("/dummy-banner.jpg");
  const [aboutText, setAboutText] = useState(
    "Professional footballer with 10 years of experience in top leagues. Passionate about sports analytics and mentoring young athletes."
  );
  const [isEditing, setIsEditing] = useState(false);
  const [isProfileEditing, setIsProfileEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    field: "Professional Football Player | Sport Analyst",
    address: "New York, USA • 5k Teammates",
  });

  const handleImageUpload = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      if (type === "profile") setProfileImage(imageUrl);
      if (type === "banner") setBannerImage(imageUrl);
    }
  };

  const handleAboutEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleProfileEdit = () => {
    setIsProfileEditing(true);
  };

  const handleProfileSave = (e) => {
    e.preventDefault();
    setIsProfileEditing(false);
  };

  const handleAboutSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      {/* Main Profile Section */}
      <main className="profile-main">
        {/* Profile Header */}
        <section className="profile-header">
          <label className="banner-upload">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e, "banner")}
            />
            <img src={bannerImage} alt="Banner" className="banner" />
          </label>
          <div className="profile-info">
            <label className="profile-upload">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, "profile")}
              />
              <img src={profileImage} alt="Profile" className="profile-pic" />
            </label>
            <div className="profile-details">
              <h2>
                {profileData.name}{" "}
                <button className="edit-btn" onClick={handleProfileEdit}>
                  ✎
                </button>
              </h2>
              <p>{profileData.field}</p>
              <p>{profileData.address}</p>
            </div>
          </div>
        </section>

        {/* Profile Edit Popup */}
        {isProfileEditing && (
          <div className="popup-form">
            <form>
              <label>
                Name:{" "}
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) =>
                    setProfileData({ ...profileData, name: e.target.value })
                  }
                />
              </label>
              <label>
                Field:{" "}
                <input
                  type="text"
                  value={profileData.field}
                  onChange={(e) =>
                    setProfileData({ ...profileData, field: e.target.value })
                  }
                />
              </label>
              <label>
                Address:{" "}
                <input
                  type="text"
                  value={profileData.address}
                  onChange={(e) =>
                    setProfileData({ ...profileData, address: e.target.value })
                  }
                />
              </label>
              <button onClick={handleProfileSave}>Save</button>
              <button onClick={() => setIsProfileEditing(false)}>Cancel</button>
            </form>
          </div>
        )}

        {/* About Section */}
        <section className="card about">
          <h3>
            About{" "}
            <button className="edit-btn" onClick={handleAboutEdit}>
              ✎
            </button>
          </h3>
          {isEditing ? (
            <div className="popup-form">
              <form>
                <textarea
                  value={aboutText}
                  onChange={(e) => setAboutText(e.target.value)}
                />
                <button onClick={handleAboutSave}>Save</button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>
              </form>
            </div>
          ) : (
            <p>{aboutText}</p>
          )}
        </section>
        <section>
          <Education />
          <Experience />
          <SportsCareerOverview />
        </section>
      </main>

      {/* Right Sidebar */}
      <aside className="profile-sidebar">
        <div className="card">
          <h3>Profile Analytics</h3>
          <p>👀 Profile Views: 1,234</p>
          <p>📢 Post Impressions: 4,567</p>
          <p>🔗 Teammates: 5k+</p>
        </div>
        <div className="card">
          <h3>Sports Interests</h3>
          <p>⚽ Soccer</p>
          <p>🏀 Basketball</p>
          <p>🎾 Tennis</p>
        </div>
        <div className="card">
          <h3>People You May Know</h3>
          <div className="people">
            <p>
              <strong>Pooja Sree</strong>
              <br /> Healthcare Recruiter
            </p>
            <button>+ Connect</button>
          </div>
          <div className="people">
            <p>
              <strong>Taher Ali</strong>
              <br /> Architectural Drafter at EBTIKAR
            </p>
            <button>+ Connect</button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Profile;
