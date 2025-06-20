// src/components/DashboardMain.jsx
import React from 'react';
import MoodSummaryCard from './MoodSummaryCard';
import RecentJournalEntriesCard from './RecentJournalEntriesCard';
import CommunityFeedCard from './CommunityFeedCard';
import AITherapyCompanionCard from './AITherapyCompanionCard';

// Receive userName as a prop using object destructuring { userName }
function DashboardMain({ userName }) { 
  return (
    <main className="app-dashboard-main">
      <h1>Welcome back, {userName} 👋</h1> {/* Use the prop here */}
      <button>Get Started</button>

      <div className="dashboard-grid">
        <MoodSummaryCard />
        <RecentJournalEntriesCard />
        <CommunityFeedCard />
        <AITherapyCompanionCard />
      </div>
    </main>
  );
}

export default DashboardMain;
