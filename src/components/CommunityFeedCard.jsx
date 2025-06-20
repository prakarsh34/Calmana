// src/components/CommunityFeedCard.jsx
import React from 'react';
// No react-icons imports needed if using emojis directly

function CommunityFeedCard() {
  return (
    <div className="card community-feed-card-main">
      <h3>Community Feed</h3>
      <div className="main-community-post">
        <div className="post-header">
          <img src="https://via.placeholder.com/40" alt="Sarah" className="avatar" />
          <div className="post-meta">
            <span className="post-author">Sarah L.</span>
            <span className="post-time">5 hours ago</span>
          </div>
        </div>
        <p className="post-content">
          Just wanted to share a small win today! I managed to meditate for 10 minutes straight.
          It's a small step, but it feels good to be consistent. Keep going everyone!
        </p>
        <div className="post-actions-main">
          {/* Using emojis directly */}
          <span>❤️ 28 Likes</span>
          <span>💬 7 Comments</span>
        </div>
      </div>

      <p style={{textAlign: 'center', marginTop: '20px', color: '#007bff', cursor: 'pointer'}}>View All Posts</p>
    </div>
  );
}

export default CommunityFeedCard;