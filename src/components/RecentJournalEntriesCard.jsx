import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // <--- ADDED: Import useNavigate hook

const RecentJournalEntriesCard = () => {
    // State to hold the current journal entry text
    const [journalEntryText, setJournalEntryText] = useState('');
    // State to store all logged journal entries
    const [journalEntries, setJournalEntries] = useState([]);

    const navigate = useNavigate(); // <--- ADDED: Initialize useNavigate

    // Load journal entries from localStorage on component mount
    useEffect(() => {
        const storedEntries = localStorage.getItem('journalEntries');
        if (storedEntries) {
            // Parse and sort by timestamp to ensure most recent are first, in case of manual local storage edits
            const parsedEntries = JSON.parse(storedEntries).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            setJournalEntries(parsedEntries);
        }
    }, []);

    // Save journal entries to localStorage whenever journalEntries state changes
    useEffect(() => {
        localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
    }, [journalEntries]);

    const handleAddEntry = () => {
        if (journalEntryText.trim()) { // Ensure the entry is not empty
            const newEntry = {
                id: Date.now(), // Unique ID, good for React keys and potential deletion later
                text: journalEntryText.trim(),
                timestamp: new Date().toISOString(),
            };
            // Add the new entry to the beginning of the array
            setJournalEntries(prevEntries => [newEntry, ...prevEntries]);
            // Clear the textarea
            setJournalEntryText('');
        } else {
            alert('Journal entry cannot be empty!');
        }
    };

    // Helper to format date for display
    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    // Helper to format time for display
    const formatTime = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    };

    return (
        <div className="card recent-journal-entries-card">
            <h3>Your Recent Journal Entries</h3>

            {/* Journal Entry Input Section */}
            <div className="journal-entry-input-section">
                <textarea
                    className="journal-entry-textarea"
                    placeholder="Write down your thoughts, feelings, or daily reflections..."
                    value={journalEntryText}
                    onChange={(e) => setJournalEntryText(e.target.value)} // <--- FIXED: Changed setNewEntryContent to setJournalEntryText
                ></textarea>
                <button
                    className="add-entry-button"
                    onClick={handleAddEntry}
                >
                    Add Entry
                </button>
            </div>

            {/* List of Recent Entries */}
            <div className="journal-entries-list">
                {journalEntries.length > 0 ? (
                    // Display up to the last 3 entries
                    journalEntries.slice(0, 3).map((entry) => (
                        <div key={entry.id} className="journal-entry-item">
                            <div className="entry-meta">
                                <span className="entry-date">{formatDate(entry.timestamp)}</span>
                                {' at '}
                                <span className="entry-time">{formatTime(entry.timestamp)}</span>
                            </div>
                            <p className="entry-content">{entry.text}</p>
                        </div>
                    ))
                ) : (
                    <p className="empty-state">No journal entries yet. Start writing!</p>
                )}
            </div>

            <button
                className="view-all-entries-button"
                onClick={() => navigate('/journal')} // <--- ADDED: onClick handler for navigation
            >
                View All Entries
            </button>
        </div>
    );
};

export default RecentJournalEntriesCard;
