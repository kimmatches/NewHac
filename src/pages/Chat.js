import React, { useState } from 'react';
import '../Chat.css';

function App() {
  const [chatHistory, setChatHistory] = useState([
    { role: 'user', text: '안녕하세요!', icon: '👤' },
    { role: 'ai', text: '안녕하세요!', icon: '🤖' },
  ]);

  const [userInput, setUserInput] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (userInput.trim() === '') return;

    setChatHistory([...chatHistory, { role: 'user', text: userInput, icon: '👤' }]);

    //백엔드 API


    setUserInput('');
  };

  return (
    <div className="chat-container">
      <div className="chat-history" id="chat-history">
        {chatHistory.map((message, index) => (
          <div
            key={index}
            className={`message ${message.role === 'user' ? 'user-message' : 'ai-message'}`}
          >
            <span className="message-icon">{message.icon}</span>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          id="user-input"
          placeholder="메시지 입력..."
          value={userInput}
          onChange={handleInputChange}
        />
        <button id="send-button" onClick={handleSendMessage}>
          전송
        </button>
      </div>
    </div>
  );
}

export default App;
