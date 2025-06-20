// src/App.jsx
import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMain from './components/DashboardMain';

function App() {
  // Define the user's name here
  const userName = "Prakarsh"; // You can change this name easily now!

  return (
    <div className="app-container">
      {/* Pass userName as a prop to Header */}
      <Header userName={userName} /> 
      <div className="content-area">
        <Sidebar />
        {/* Pass userName as a prop to DashboardMain */}
        <DashboardMain userName={userName} /> 
      </div>
    </div>
  );
}

export default App;
