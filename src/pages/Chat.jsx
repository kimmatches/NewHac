import React, {useState} from 'react';
import '../Chat.css';
import axios from 'axios';

function App() {
    const [chatHistory, setChatHistory] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [prompt, setPrompt] = useState('');

    // useEffect(() => {
    //    const fetchData = async () => {
    //      try {
    //        const response = await axios.post('http://124.54.16.127:8080//api/v1/chat/completion');
    //        const data = response.data;
    //        setPrompt(data.prompt);
    //        setChatHistory(data.history.map((message) => ({ role: 'user', content: message })));
    //      } catch (error) {
    //        console.error('API 호출 중 오류 발생:', error);
    //      }
    //    };
    //
    //    fetchData();
    //  }, []);

    const handleInputChange = (e) => {
        setUserInput(e.target.value);
    };

    const handleSendMessage = async () => {
        if (userInput.trim() === '') return;

        const newUserMessage = {
            role: 'user',
            content: userInput,
            icon: '👤',
        };
        setChatHistory([...chatHistory, newUserMessage]);
        setUserInput('');
        try {
            const response = await axios.post('http://124.54.16.127:8080/api/v1/chat/completion', {
                prompt: userInput, history: []
            });
            const content = response.data.content;
            const events = response.data.events;
            for (const event of events) {
                const title = event.title;
                const color = event.color;
                const start = event.start;
                const end = event.end;

                const squareBoxStyle = {
                  display: 'inline-block',
                    // padding:15,
                  width: '20px', /* 네모 박스의 너비 설정 */
                  height: '30px', /* 네모 박스의 높이 설정 */
                  backgroundColor: color || 'event.color', /* 원하는 색상 설정 또는 기본값 사용 */
                   marginLeft: '20px',
                  verticalAlign: 'middle', /* 수직 정렬 설정 */
                };
                const aiResponse = {
                    role: 'assistant',
                    content: (
                        <>
                             <div>{content}</div> {/* content를 함께 출력 */}
                              <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={squareBoxStyle}></div>
                                   <div style={{ fontSize: '7px', backgroundColor: '#212936', padding: '8px 12px', width: '360px' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                      <div>{title}</div>
                                      <div>|</div>
                                      <div>{start}</div>
                                    </div>
                                  </div>

                              </div>
                        </>
                    ),
                    // events: [title, color, start, end],
                    // events: '${title} | ${start}',
                    icon: '🤖',
                };
                setPrompt('');
                setChatHistory((prevHistory) => [...prevHistory, aiResponse]);
            }
        } catch (error) {
            console.error('메시지 전송 중 오류 발생:', error);
        }


    };

    const handleInputKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-history" id="chat-history">
                <div className="prompt">{prompt}</div>
                {chatHistory.map((message, index) => (
                    <div
                        key={index}
                        className={`message ${message.role === 'user' ? 'user-message' : 'ai-message'}`}
                    >
                        {message.role === 'assistant' && <span className="icon">{message.icon}</span>}
                        <div>{message.content}
                            <div className="event">{message.events}</div>
                        </div>

                        {message.role === 'user' && <span className="icon">{message.icon}</span>}
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