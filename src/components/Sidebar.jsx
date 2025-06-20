// src/components/Sidebar.jsx
import React, { useState } from 'react';
// No react-icons imports needed if using emojis directly

function Sidebar() {
  const [selectedChatroom, setSelectedChatroom] = useState('Anxiety Support');

  const handleChatroomSelect = (chatroomName) => {
    setSelectedChatroom(chatroomName);
  };

  return (
    <aside className="app-sidebar">
      <h2>CHATROOM</h2>
      <ul>
        <li
          className={selectedChatroom === 'Anxiety Support' ? 'active-chatroom' : ''}
          onClick={() => handleChatroomSelect('Anxiety Support')}
        >
          Anxiety Support
        </li>
        <li
          className={selectedChatroom === 'Karen' ? 'active-chatroom' : ''}
          onClick={() => handleChatroomSelect('Karen')}
        >
          Karen
        </li>
      </ul>
      <h2 style={{ marginTop: '20px' }}>COMMUNITY FEED</h2>
      <div className="community-post">
        <img src="https://via.placeholder.com/30" alt="Flona" className="avatar" />
        <div>
          <p>Flona <small>2 hours ago</small></p>
          <p>Took a big step forward in my healing journey today!</p>
          <div className="post-actions">
            {/* Using emojis directly */}
            <span>❤️ 12</span>
            <span>💬 4</span>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;