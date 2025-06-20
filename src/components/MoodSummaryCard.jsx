// src/components/MoodSummaryCard.jsx
import React, { useState } from 'react'; // <--- Import useState here

function MoodSummaryCard() {
  // Declare a new state variable 'selectedMood' and its setter 'setSelectedMood'
  // Initialize it to null, meaning no mood is selected initially.
  const [selectedMood, setSelectedMood] = useState(null); 

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood); // Update the state with the selected mood
  };

  return (
    <div className="card mood-summary-card">
      <h3>Mood Summary</h3>
      <p>Today's mood</p>
      <div className="mood-emoticons">
        {/* Each emoticon span now has an onClick handler and a conditional class */}
        <span
          className={selectedMood === 'happy' ? 'selected-mood' : ''}
          onClick={() => handleMoodSelect('happy')}
        >
          😊
        </span>
        <span
          className={selectedMood === 'slightly-happy' ? 'selected-mood' : ''}
          onClick={() => handleMoodSelect('slightly-happy')}
        >
          🙂
        </span>
        <span
          className={selectedMood === 'neutral' ? 'selected-mood' : ''}
          onClick={() => handleMoodSelect('neutral')}
        >
          😐
        </span>
        <span
          className={selectedMood === 'slightly-sad' ? 'selected-mood' : ''}
          onClick={() => handleMoodSelect('slightly-sad')}
        >
          🙁
        </span>
        <span
          className={selectedMood === 'sad' ? 'selected-mood' : ''}
          onClick={() => handleMoodSelect('sad')}
        >
          ☹️
        </span>
      </div>
      <div className="mood-graph-placeholder">
        {/* Display selected mood text here, or keep graph placeholder */}
        {selectedMood ? `You selected: ${selectedMood.replace('-', ' ')}` : 'Select your mood'}
      </div>
    </div>
  );
}

export default MoodSummaryCard;