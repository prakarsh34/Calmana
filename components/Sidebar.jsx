// src/components/Sidebar.jsx
import React from 'react';

function Sidebar() {
  return (
    <aside className="app-sidebar">
      <h2>CHATROOM</h2>
      <ul>
        <li>Anxiety</li>
        <li>Karen</li>
      </ul>
      <h2 style={{ marginTop: '20px' }}>COMMUNITY FEED</h2>
      <div className="community-post">
        {/* Using a placeholder image for now. You'll replace this with actual user avatars later. */}
        <img src="https://via.placeholder.com/30" alt="Flona" className="avatar" />
        <div>
          <p>Flona <small>2 hours ago</small></p>
          <p>Took a big step forward in my healing journey today!</p>
          <div className="post-actions">
            <span>❤️ 12</span>
            <span>💬 4</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;