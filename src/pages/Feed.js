import React, { useState } from "react";
import { FaThumbsUp, FaThumbsDown, FaComment, FaShare } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaLinkedin, FaLink } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import feedData from "./feedData";
import "./Feed.css";

const Feed = () => {
  const [commentBox, setCommentBox] = useState(null);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");
  const [shareBox, setShareBox] = useState(null);
  const [likes, setLikes] = useState(
    feedData.reduce((acc, person) => {
      person.posts.forEach((post) => {
        acc[post.postId] = 40000;
      });
      return acc;
    }, {})
  );
  const navigate = useNavigate();

  const getRandomTime = () => {
    const hoursAgo = Math.floor(Math.random() * 24) + 1;
    return `${hoursAgo}h ago`;
  };

  const handleCommentClick = (postId) => {
    setCommentBox(commentBox === postId ? null : postId);
  };

  const handleAddComment = (postId) => {
    if (!newComment.trim()) return;
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setComments((prev) => ({
      ...prev,
      [postId]: [
        ...(prev[postId] || []),
        { name: "You", text: newComment, time: currentTime },
      ],
    }));
    setNewComment("");
  };

  const handleShareClick = (postId) => {
    setShareBox(shareBox === postId ? null : postId);
  };

  const handleLikeClick = (postId) => {
    setLikes((prev) => ({
      ...prev,
      [postId]: prev[postId] + 1,
    }));
  };

  const handleProfileClick = (name) => {
    const profileRoutes = {
      "Cristiano Ronaldo": "/RonaldoProfile",
      "Lionel Messi": "/MessiProfile",
      "Serena Williams": "/SerenaProfile",
    };
    navigate(profileRoutes[name] || "/");
  };

  return (
    <div className="feed-container">
      {feedData.map((person) =>
        person.posts.map((post) => (
          <div key={post.postId} className="post-card">
            <div className="post-header">
              <div>
                <h4
                  onClick={() => handleProfileClick(person.name)}
                  className="clickable-name"
                >
                  {person.name}
                </h4>
                <p>{person.followers} followers</p>
              </div>
            </div>
            <p className="post-content">{post.content}</p>
            {post.image && (
              <img src={post.image} alt="Post" className="post-image" />
            )}
            <div className="post-actions">
              <span
                onClick={() => handleLikeClick(post.postId)}
                className="action-btn"
              >
                <FaThumbsUp /> {likes[post.postId]}
              </span>
              <span className="action-btn">
                <FaThumbsDown />
              </span>
              <span
                onClick={() => handleCommentClick(post.postId)}
                className="action-btn"
              >
                <FaComment /> {post.comments}
              </span>
              <span
                onClick={() => handleShareClick(post.postId)}
                className="action-btn"
              >
                <FaShare /> {post.shares}
              </span>
            </div>

            {commentBox === post.postId && (
              <div className="comment-box">
                <h4>Comments</h4>
                <div className="comments-list">
                  {(comments[post.postId] || []).map((comment, index) => (
                    <div key={index} className="comment-item">
                      <strong>{comment.name}</strong>
                      <p>{comment.text}</p>
                      <small>{comment.time}</small>
                    </div>
                  ))}
                </div>
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment..."
                />
                <button onClick={() => handleAddComment(post.postId)}>
                  Post Comment
                </button>
              </div>
            )}

            {shareBox === post.postId && (
              <div className="share-box">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={24} color="#1877F2" />
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter size={24} color="#1DA1F2" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={24} color="#0077B5" />
                </a>
                <a
                  href="#"
                  onClick={() =>
                    navigator.clipboard.writeText(window.location.href)
                  }
                >
                  <FaLink size={24} color="#000" />
                </a>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default Feed;
