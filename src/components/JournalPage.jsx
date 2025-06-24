import React, { useState, useEffect } from 'react';
// Assuming App.css is in src, this path will correctly reach it from src/components
import '../App.css'; 

const JournalPage = () => {
    const [journalEntries, setJournalEntries] = useState([]);

    // Load journal entries from localStorage on component mount
    useEffect(() => {
        const storedEntries = localStorage.getItem('journalEntries');
        if (storedEntries) {
            // Parse and sort by timestamp to ensure most recent are first
            const parsedEntries = JSON.parse(storedEntries).sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
            setJournalEntries(parsedEntries);
        }
    }, []);

    // Helper to format date for display
    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long', // Full month name
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
        <div className="journal-page-container">
            <h1>Your Complete Journal</h1>

            {journalEntries.length > 0 ? (
                <div className="all-journal-entries-list">
                    {journalEntries.map((entry) => (
                        <div key={entry.id} className="journal-entry-item">
                            <div className="entry-meta">
                                <span className="entry-date">{formatDate(entry.timestamp)}</span>
                                {' at '}
                                <span className="entry-time">{formatTime(entry.timestamp)}</span>
                            </div>
                            <p className="entry-content">{entry.text}</p>
                            {/* You could add edit/delete buttons here later */}
                        </div>
                    ))}
                </div>
            ) : (
                <p className="empty-state">You haven't written any journal entries yet. Go back to the Dashboard to start!</p>
            )}
        </div>
    );
};

export default JournalPage;