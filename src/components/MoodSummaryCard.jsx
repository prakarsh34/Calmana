import React, { useState, useEffect } from 'react';

const MoodSummaryCard = () => {
    // State to hold the currently selected mood
    const [selectedMood, setSelectedMood] = useState(null); // e.g., 'happy', 'neutral', 'sad'
    // State to hold the mood note
    const [moodNote, setMoodNote] = useState('');
    // State to store all logged moods
    const [loggedMoods, setLoggedMoods] = useState([]);

    // Load moods from localStorage on component mount
    useEffect(() => {
        const storedMoods = localStorage.getItem('loggedMoods');
        if (storedMoods) {
            setLoggedMoods(JSON.parse(storedMoods));
        }
    }, []); // Empty dependency array means this runs only once on mount

    // Save moods to localStorage whenever loggedMoods state changes
    useEffect(() => {
        localStorage.setItem('loggedMoods', JSON.stringify(loggedMoods));
    }, [loggedMoods]); // Runs whenever loggedMoods changes

    const handleMoodSelect = (mood) => {
        setSelectedMood(mood);
    };

    const handleLogMood = () => {
        if (selectedMood) {
            const newMoodEntry = {
                mood: selectedMood,
                note: moodNote.trim(), // Remove leading/trailing whitespace
                timestamp: new Date().toISOString(), // ISO string for easy sorting/display
            };
            // Add the new entry to the beginning of the array to show most recent first
            setLoggedMoods(prevMoods => [newMoodEntry, ...prevMoods]);
            
            // Reset fields after logging
            setSelectedMood(null);
            setMoodNote('');
        } else {
            alert('Please select a mood before logging!');
        }
    };

    // Define moods and their corresponding emojis
    const moods = [
        { name: 'happy', emoji: '😁' },
        { name: 'good', emoji: '😊' },
        { name: 'neutral', emoji: '😐' },
        { name: 'stressed', emoji: '😟' },
        { name: 'sad', emoji: '😔' },
    ];

    return (
        <div className="card mood-summary-card">
            <h3>How are you feeling today?</h3>
            <p className="mood-card-subtitle">Track your emotional well-being.</p>

            <div className="mood-emoticons">
                {moods.map((mood) => (
                    <span
                        key={mood.name}
                        className={`mood-icon ${selectedMood === mood.name ? 'selected-mood' : ''}`}
                        onClick={() => handleMoodSelect(mood.name)}
                        title={mood.name.charAt(0).toUpperCase() + mood.name.slice(1)} // Capitalize first letter for title
                    >
                        {mood.emoji}
                    </span>
                ))}
            </div>

            {/* Mood Note Section */}
            <div className="mood-note-section">
                <textarea
                    className="mood-note-input"
                    placeholder="Add a quick note about your mood..."
                    value={moodNote}
                    onChange={(e) => setMoodNote(e.target.value)}
                    rows="3"
                ></textarea>
                <button
                    className="log-mood-button"
                    onClick={handleLogMood}
                >
                    Log Mood
                </button>
            </div>

            {/* Display Recent Moods (Simple List) */}
            <div style={{ marginTop: '20px', width: '100%' }}>
                <h4 style={{ marginBottom: '10px', color: 'var(--text-primary)', fontSize: '1rem' }}>Recent Moods:</h4>
                {loggedMoods.length > 0 ? (
                    <div className="journal-entries-list" style={{ maxHeight: '120px' }}> {/* Re-using list styles for simplicity */}
                        {loggedMoods.slice(0, 3).map((entry, index) => ( // Show last 3 moods
                            <div key={index} className="journal-entry-item" style={{ padding: '10px', minHeight: 'unset' }}>
                                <div className="entry-meta">
                                    <span className="entry-date">{new Date(entry.timestamp).toLocaleDateString()}</span>
                                    {' at '}
                                    <span className="entry-time">{new Date(entry.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                </div>
                                <div className="entry-content">
                                    {moods.find(m => m.name === entry.mood)?.emoji || entry.mood}
                                    {entry.note && `: ${entry.note}`}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="empty-state" style={{ padding: '10px' }}>No moods logged yet.</p>
                )}
            </div>
        </div>
    );
};

export default MoodSummaryCard;