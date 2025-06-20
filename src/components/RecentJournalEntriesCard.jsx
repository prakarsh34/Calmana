// src/components/RecentJournalEntriesCard.jsx
import React from 'react';

function RecentJournalEntriesCard() {
  return (
    <div className="card recent-journal-entries-card">
      <h3>Recent Journal Entries</h3>
      <div className="journal-prompts">
        <p className="prompt-item">Hi Karen, how can I assist you today?</p>
        <p className="prompt-item">Vent about your day</p>
        <p className="prompt-item">Challenge negative thoughts</p>
        <p className="prompt-item">Practice mindfulness</p>
      </div>
      {/* You could add a "See All" button or a link here later */}
    </div>
  );
}

export default RecentJournalEntriesCard;