import React, { useState, useEffect, useRef } from 'react';

const AITherapyCompanionCard = () => {
    // State to hold the current message being typed by the user
    const [currentMessage, setCurrentMessage] = useState('');
    // State to store the entire chat history
    // Each message object will have: { type: 'user'/'ai', text: 'message content', timestamp: 'ISO string' }
    const [chatHistory, setChatHistory] = useState([]);

    // Ref for automatically scrolling to the bottom of the chat
    const chatEndRef = useRef(null);

    // Load chat history from localStorage on component mount
    useEffect(() => {
        const storedChat = localStorage.getItem('aiCompanionChatHistory');
        if (storedChat) {
            setChatHistory(JSON.parse(storedChat));
        }
    }, []);

    // Save chat history to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('aiCompanionChatHistory', JSON.stringify(chatHistory));
        // Scroll to the latest message whenever chat history updates
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chatHistory]);

    // Simple AI response logic (you can make this more complex later)
    const getAIResponse = (userMessage) => {
        const lowerCaseMessage = userMessage.toLowerCase();
        if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
            return "Hello there! How can I assist you today?";
        } else if (lowerCaseMessage.includes('mood') || lowerCaseMessage.includes('feeling')) {
            return "I see you're thinking about your feelings. Would you like to log your mood or explore some resources?";
        } else if (lowerCaseMessage.includes('journal')) {
            return "The journal is a great place to reflect. Is there anything specific you'd like to write about?";
        } else if (lowerCaseMessage.includes('help')) {
            return "I'm here to support you. What's on your mind?";
        } else if (lowerCaseMessage.includes('good') || lowerCaseMessage.includes('great')) {
            return "That's wonderful to hear! Keep up the positive energy.";
        } else if (lowerCaseMessage.includes('bad') || lowerCaseMessage.includes('sad') || lowerCaseMessage.includes('stressed')) {
            return "I'm sorry to hear that. It's okay to feel that way. Would you like to talk more about it, or perhaps try a calming exercise?";
        } else {
            return "That's an interesting thought. Can you tell me more about it?";
        }
    };

    const handleSendMessage = () => {
        if (currentMessage.trim()) {
            const newUserMessage = {
                type: 'user',
                text: currentMessage.trim(),
                timestamp: new Date().toISOString(),
            };

            // Add user message
            setChatHistory(prevChat => [...prevChat, newUserMessage]);
            setCurrentMessage(''); // Clear input

            // Simulate AI response after a short delay
            setTimeout(() => {
                const aiResponseText = getAIResponse(newUserMessage.text);
                const newAiMessage = {
                    type: 'ai',
                    text: aiResponseText,
                    timestamp: new Date().toISOString(),
                };
                setChatHistory(prevChat => [...prevChat, newAiMessage]);
            }, 800); // 0.8 second delay for AI response
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) { // Send on Enter, allow Shift+Enter for new line
            e.preventDefault(); // Prevent new line in textarea
            handleSendMessage();
        }
    };

    return (
        <div className="card ai-therapy-companion-card">
            <h3>AI Therapy Companion</h3> {/* Title for the card */}
            <p className="mood-card-subtitle">Hi Prakash, how can I assist you today?</p> {/* Placeholder suggestion */}

            <div className="ai-chat-display">
                {chatHistory.length > 0 ? (
                    chatHistory.map((msg, index) => (
                        <div key={index} className={`chat-message ${msg.type}`}>
                            <span className="message-text">{msg.text}</span>
                            <span className="message-time">
                                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>
                    ))
                ) : (
                    <div className="empty-state-chat">
                        Start a conversation with your AI Companion.
                    </div>
                )}
                <div ref={chatEndRef} /> {/* Element to scroll to */}
            </div>

            <div className="ai-chat-input-section">
                <textarea
                    className="ai-chat-textarea"
                    placeholder="Type your thoughts or questions here..."
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    rows="3"
                ></textarea>
                <button
                    className="send-message-button"
                    onClick={handleSendMessage}
                >
                    Send Message
                </button>
            </div>
        </div>
    );
};

export default AITherapyCompanionCard;