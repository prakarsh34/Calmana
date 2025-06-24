import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import MoodSummaryCard from './components/MoodSummaryCard';
import RecentJournalEntriesCard from './components/RecentJournalEntriesCard';
import JournalPage from './components/JournalPage';
import AITherapyCompanionCard from './components/AITherapyCompanionCard'; // Make sure this is imported if you're working on it
// import CommunityFeedCard from './components/CommunityFeedCard'; // Add if you've made this a separate component

function App() {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedMode = localStorage.getItem('isDarkMode');
        return storedMode === 'true';
    });

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        localStorage.setItem('isDarkMode', isDarkMode);
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <Router>
            <div className="app-container">
                {/* Dark Mode Toggle */}
                <div className="mode-toggle">
                    <label className="switch">
                        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
                        <span className="slider"></span>
                    </label>
                </div>

                {/* Header */}
                <header className="app-header">
                    <nav>
                        <div className="logo">CALMANA</div>
                        <div className="nav-links">
                            <Link to="/">Dashboard</Link>
                            <Link to="/journal">Journal</Link>
                            {/* These links match what's in your screenshot now */}
                            <Link to="/community">Community</Link>
                            <Link to="/ai-companion">AI Companion</Link>
                        </div>
                        <div className="user-info">
                            <span>Hey, User!</span>
                            <img src="https://via.placeholder.com/35" alt="User Avatar" className="user-avatar" />
                        </div>
                    </nav>
                </header>

                {/* Define Routes for different pages */}
                <Routes>
                    {/* The Dashboard content is now the element of the root path Route */}
                    <Route path="/" element={
                        <div className="content-area">
                            {/* Left Sidebar */}
                            <aside className="app-sidebar">
                                <h2>Chats</h2>
                                <ul>
                                    {/* Updated chatroom names based on your screenshot */}
                                    <li className="active-chatroom">
                                        <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zM9.5 13.5c-0.83 0-1.5-0.67-1.5-1.5S8.67 10.5 9.5 10.5 11 11.17 11 12s-0.67 1.5-1.5 1.5zM14.5 13.5c-0.83 0-1.5-0.67-1.5-1.5S13.67 10.5 14.5 10.5 16 11.17 16 12s-0.67 1.5-1.5 1.5z" />
                                        </svg>
                                        Anxiety Support
                                    </li>
                                    <li>
                                        <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                        </svg>
                                        Karen
                                    </li>
                                </ul>

                                <h2>Community Feed</h2> {/* Updated title based on your screenshot */}
                                <div className="community-post">
                                    <img src="https://via.placeholder.com/35" alt="User Avatar" className="avatar" />
                                    <div>
                                        <p><b>Fiona</b> <small>2 hours ago</small></p> {/* Name and time from screenshot */}
                                        <p>Took a big step forward in my healing journey today!</p> {/* Text from screenshot */}
                                        <div className="post-actions">
                                            <span>
                                                <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                                </svg> 12
                                            </span>
                                            <span>
                                                <svg className="action-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                                                </svg> 4
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                {/* Added "View All Posts" button based on your screenshot */}
                                <button className="view-all-posts-button">View All Posts</button>
                            </aside>

                            {/* Main Dashboard Content */}
                            <main className="app-dashboard-main">
                                <h1>Welcome back, Prakash 👋</h1> {/* Updated welcome based on your screenshot */}
                                <button className="get-started-button">Get Started</button> {/* Added Get Started button */}

                                <div className="dashboard-grid">
                                    <MoodSummaryCard />
                                    <RecentJournalEntriesCard />
                                    <div className="card placeholder-card">
                                        <h3>Community Feed</h3> {/* Changed to match your screenshot */}
                                        {/* Content from your screenshot */}
                                        <p>Hi Karen, how can I assist you today?</p>
                                        <p>Vent about your day</p>
                                        <p>Challenge negative thoughts</p>
                                        <p>Practice mindfulness</p>
                                        {/* This card seems to be duplicated with the sidebar one, will use the sidebar version mostly */}
                                        {/* For consistency, this one could become "Personalized Insights" as originally planned */}
                                        <p>Just wanted to share a small win today!</p>
                                        <p>I managed to meditate for 10 minutes straight. It's a small step, but it feels good to be consistent. Keep going everyone!</p>
                                    </div>
                                    <AITherapyCompanionCard /> {/* Moved AI Therapy Companion Card here */}
                                </div>
                            </main>

                            {/* Right Sidebar - Removed as per your screenshot, but if you want it back, place it here */}
                            {/* <aside className="app-right-sidebar">
                                <div className="card">
                                    <h3>Daily Affirmation</h3>
                                    <p><i>"I am capable of amazing things."</i></p>
                                </div>
                                <div className="card" style={{marginTop: '20px'}}>
                                    <h3>Quick Stats</h3>
                                    <p>Journal Entries: <b>{localStorage.getItem('journalEntries') ? JSON.parse(localStorage.getItem('journalEntries')).length : 0}</b></p>
                                    <p>Avg. Mood (Last 7 days): <b>😊 Good</b></p>
                                </div>
                            </aside> */}
                        </div>
                    } />
                    {/* Routes for other pages */}
                    <Route path="/journal" element={<JournalPage />} />
                    {/* Placeholder routes for other components. Use their actual component if you make them pages. */}
                    <Route path="/community" element={<h1 className="placeholder-page-title">Community Page Coming Soon!</h1>} />
                    <Route path="/ai-companion" element={<h1 className="placeholder-page-title">AI Companion Page Coming Soon!</h1>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;