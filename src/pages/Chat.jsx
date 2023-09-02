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
    // 사용자 입력 내용에 따라 챗봇 응답 생성
    let botResponse = '';
    let botResponseClassName = '';
    if (userInput.toLowerCase() === '일정추가') {
      // 실제로 백엔드 API를 호출하고 응답을 가져올 수도 있음
      // 이 예제에서는 간단한 응답 생성
      botResponse = '일정을 추가했습니다!';
      botResponseClassName = 'custom-bot-response';
    } else {
      // 다른 메시지에 대한 기본 응답
      botResponse = '죄송합니다. 이해하지 못했습니다.';
    }

    // 챗봇 응답을 chatHistory에 추가
    setChatHistory([...chatHistory, { role: 'ai', text: botResponse, icon: '🤖' }]);


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
