import React, { useState } from "react";
import "./RonaldoProfile.css";

const RonaldoProfile = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };

  const handleMessageClick = () => {
    window.location.href = "/messaging";
  };

  return (
    <div className="profile-container">
      {/* Cover Photo */}
      <div className="cover-photo">
        <img
          src="https://th.bing.com/th/id/OIP.WN_-19C2nUlL9A9lctZMMgHaDF?w=303&h=145&c=7&r=0&o=5&pid=1.7"
          alt="Cover"
        />
      </div>

      {/* Profile Info */}
      <div className="profile-info">
        <img
          src="https://th.bing.com/th/id/OIP.nfYMp_0se66eyku9jTX7WQHaFj?w=225&h=180&c=7&r=0&o=5&pid=1.7"
          alt="Profile"
          className="profile-pic"
        />
        <div className="profile-details">
          <h1>Cristiano Ronaldo</h1>
          <p className="bio">
            5x Ballon d'Or Winner | Football Legend | Entrepreneur
          </p>
          <p className="location">
            Portugal | Al-Nassr | Former Real Madrid & Manchester United Star
          </p>
          <div className="buttons">
            <button
              className={isFollowing ? "following" : "follow"}
              onClick={handleFollowClick}
            >
              {isFollowing ? "Following" : "Follow"}
            </button>
            <button className="message" onClick={handleMessageClick}>
              Message
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about">
        <h2>About</h2>
        <p>
          One of the greatest footballers of all time, Cristiano Ronaldo has won
          5 Ballon d'Or awards, 5 UEFA Champions League titles, and has set
          numerous records. A leader on and off the field, inspiring millions
          worldwide.
        </p>
      </div>

      {/* Achievements */}
      <div className="achievements">
        <h2>Top Achievements</h2>
        <ul>
          <li>5x Ballon d'Or Winner</li>
          <li>5x UEFA Champions League Winner</li>
          <li>Euro 2016 & Nations League Winner</li>
          <li>All-Time Leading Scorer for Portugal</li>
          <li>Over 850 Career Goals</li>
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="posts">
        <h2>Recent Posts</h2>
        <div className="post">
          <img
            src="data:image/jpeg;base64,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"
            alt="Post 1"
            className="post-img"
          />
          <p>"Great win today! Proud of the team! 🏆⚽"</p>
          <span>3.5M Likes | 800K Comments</span>
        </div>
        <div className="post">
          <img
            src="https://th.bing.com/th/id/OIP.rP0IQNSdQfgnQYqtTN3kTgHaEo?w=309&h=197&c=7&r=0&o=5&pid=1.7"
            alt="Post 2"
            className="post-img"
          />
          <p>"Hard work and dedication lead to success! 💪⚽"</p>
          <span>4.5M Likes | 1M Comments</span>
        </div>
      </div>

      {/* More Profiles for You */}
      <div className="more-profiles">
        <h2>More profiles for you</h2>
        <div className="profile-suggestion">
          <img
            src="https://th.bing.com/th/id/OIP.jKHBRVWDytTl9XLqRRQ7kAAAAA?w=156&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Lionel Messi"
          />
          <p>Lionel Messi | 8x Ballon d'Or Winner</p>
          <button>Follow</button>
        </div>
        <div className="profile-suggestion">
          <img
            src="https://th.bing.com/th/id/OIP.i4lfUbgZeSz49y-_IEAXoQHaLt?w=156&h=180&c=7&r=0&o=5&pid=1.7"
            alt="Neymar Jr"
          />
          <p>Neymar Jr | Brazilian Football Star</p>
          <button>Follow</button>
        </div>
      </div>
    </div>
  );
};

export default RonaldoProfile;
