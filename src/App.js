// import { useState } from "react";
// import "./styles.css";
// import MyCalender from "./MyCalender";
//
//
// function addMessage(message, sender) {
//   const chatMessagesElement = document.getElementById("chat-messages");
//   const messageElement = document.createElement("div");
//   messageElement.classList.add("chat-message", sender);
//   messageElement.textContent = message;
//   chatMessagesElement.appendChild(messageElement);
//   chatMessagesElement.scrollTop = chatMessagesElement.scrollHeight; // Scroll to bottom
// }
//
//
//
// function simulateBotResponse(userInput) {
//   // 여기서 실제 GPT 모델과의 상호작용을 시뮬레이션할 수 있습니다.
//   const botResponse = `당신이 말한 내용: "${userInput}" 에 대한 대답입니다.`;
//   setTimeout(() => {
//     addMessage(botResponse, "bot");
//   }, 500); // 임의로 0.5초 후에 응답 추가
// }
//
// export default function App() {
//   const [text,setText] = useState("");
//
//   const onChange = (e) => {
//     setText(e.target.value);
//   }
//   const onReset = () => {
//     setText("");
//   }
//
//   const sendChat = () => {
//     addMessage(text, "user");
//     simulateBotResponse(text);
//     onReset();
//   }
// //   function App() {
// //   return (
// //       <div className="App">
// //         <MyCalender />
// //       </div>
// //   );
// // }
//
//   // const handleOnKeyPress = (e) => {
//   //   if (e.key === "Enter") {
//   //     sendChat(); // Enter 입력이 되면 클릭 이벤트 실행
//   //   }
//   // };
//
//   return (
//     <>
//     <body>
//       <title>ChatGPT 웹사이트 예제</title>
//       <nav className="sidebar">
//         <ul className="navbar">
//           <li>
//             <a href={1}>Chat</a>
//           </li>
//           <li>
//             <a href={2}>Calendar</a>
//           </li>
//         </ul>
//       </nav>
//       {/*<div className="chat-container" id="">*/}
//       {/*  <div className="chat">*/}
//       {/*    <div className="chat-messages" id="chat-messages">*/}
//       {/*      <div className="chat-message bot">*/}
//       {/*        안녕하세요! 무엇을 도와드릴까요?*/}
//       {/*      </div>*/}
//       {/*    </div>*/}
//       {/*    <input*/}
//       {/*      type="text"*/}
//       {/*      id="user-input"*/}
//       {/*      placeholder="메시지를 입력하세요..."*/}
//       {/*      onChange={onChange}*/}
//       {/*    />*/}
//       {/*    <button type="button" onClick={sendChat}>*/}
//       {/*      {" "}*/}
//       {/*      확인*/}
//       {/*    </button>*/}
//       {/*  </div>*/}
//       {/*</div>*/}
//      <div className="App">
//         <MyCalender />
//       </div>
//       </body>
//     </>
//
//
//   );
// }

import { useState } from "react";
// import "./styles.css";
import './App.css';
import MyCalendar from "./MyCalender";

function App() {
  return (
      <>
          <nav className="sidebar">
        <ul className="navbar">
          <li>
            <a href={1}>Chat</a>
          </li>
          <li>
            <a href={2}>Calendar</a>
          </li>
        </ul>
      </nav>

    <div className="App">
      <MyCalendar />
    </div>
    </>
  );
}

export default App;
