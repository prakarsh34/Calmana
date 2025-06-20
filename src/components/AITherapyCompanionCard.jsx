// src/components/AITherapyCompanionCard.jsx
import React, { useState } from 'react'; // <--- Import useState here

function AITherapyCompanionCard() {
  // State to hold the value of the textarea input
  const [message, setMessage] = useState('');

  // Handler for when the textarea value changes
  const handleInputChange = (event) => {
    setMessage(event.target.value); // Update the 'message' state with the new input value
  };

  // Handler for when the "Send Message" button is clicked
  const handleSendMessage = () => {
    if (message.trim()) { // Check if the message is not just empty spaces
      console.log('Sending message to AI:', message);
      // In a real app, you would send this message to an AI API here
      setMessage(''); // Clear the input field after sending
    } else {
      console.log('Message is empty.');
    }
  };

  return (
    <div className="card ai-therapy-companion-card">
      <h3>AI Therapy Companion</h3>
      <p>Hi Prakash, how can I assist you today?</p>
      <textarea
        className="ai-chat-input"
        placeholder="Type your thoughts or questions here..."
        rows="4"
        value={message} // <--- Value is controlled by our state
        onChange={handleInputChange} // <--- Update state on change
      ></textarea>
      <button 
        className="send-message-button"
        onClick={handleSendMessage} // <--- Call handler on click
      >
        Send Message
      </button>
    </div>
  );
}

export default AITherapyCompanionCard;
