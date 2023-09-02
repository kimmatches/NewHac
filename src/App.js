import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import Sidebar from "./element/Sidebar";
import SidebarItem from "./element/SidebarItem";
import MyCalendar from "./pages/MyCalender";
import Chat from "./pages/Chat"


export default function App() {

    const events = [
        {title: '재관 만나기', date: '2023-09-01'},
        {title: '민석 만나기', date: '2023-09-22'}
    ];

    return (
        <div className="App">
            <BrowserRouter>
                <Sidebar>
                    {/* <SidebarItem>*/}
                    {/*    <Link to="/">Calendar</Link>*/}
                    {/*</SidebarItem>*/}
                    {/*<SidebarItem>*/}
                    {/*    <Link to="/chat">Chat</Link>*/}
                    {/*</SidebarItem>*/}
                </Sidebar>
                <Routes>
                    <Route path="/" exact element={<div className="CalendarContainer"><MyCalendar events={events} /></div>} />
                    <Route path="/chat" element={<div className="ChatContainer"><Chat /></div>} />
                    </Routes>
            </BrowserRouter>


        </div>



    );
}


// export default App;
//
// function App() {
//
//     const events = [
//         { title: '재관 만나기', date: '2023-09-01' },
//         { title: '민석 만나기', date: '2023-09-22' }
//     ];
//   return (
//       <>
//           <nav className="sidebar">
//         <ul className="navbar">
//           <li>
//             <a href={1}>Chat</a>
//           </li>
//           <li>
//             <a href={2}>Calendar</a>
//           </li>
//         </ul>
//       </nav>
//
//     <div className="App">
//       <MyCalendar events={events}/>
//         {/*<MyCalendar />*/}
//     </div>
//     </>
//   );
// }
//
// export default App;