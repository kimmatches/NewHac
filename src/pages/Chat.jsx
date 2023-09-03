import React, {useState, useEffect} from 'react';
import '../Chat.css';

function App() {
    const [chatHistory, setChatHistory] = useState([]);
    const [userInput, setUserInput] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('');
            const data = await response.json();
            setChatHistory(data.history);
        };

        fetchData();
    }, []);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSendMessage = () => {
        if (userInput.trim() === '') return;

        const newUserMessage = {role: 'user', content: userInput};
        setChatHistory((prevHistory) => [...prevHistory, newUserMessage]);


        setTimeout(() => {
            const aiResponse = {role: 'assistant', content: 'ai응답'};

            setChatHistory((prevHistory) => [...prevHistory, aiResponse]);
        }, 1000);
        setUserInput('');
    };

    const handleInputKeyPress = (e) => {
        if (e.key === 'Enter') {
            // 엔터 키를 눌렀을 때 메시지를 전송합니다.
            handleSendMessage();
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-history" id="chat-history">
                {chatHistory.map((message, index) => (
                    <div
                        key={index}
                        className={`message ${message.role === 'user' ? 'user-message' : 'ai-message'}`}
                    >
                        {message.content}
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
                    onKeyPress={handleInputKeyPress}
                />
                <button id="send-button" onClick={handleSendMessage}>
                    전송
                </button>
            </div>
         </div>
    );
}

export default App;