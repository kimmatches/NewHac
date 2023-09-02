import './App.css';
import React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import Sidebar from "./element/Sidebar";
import SidebarItem from "./element/SidebarItem";
import MyCalendar from "./pages/MyCalender";
import Chat from "./pages/Chat"


export default function App() {

    const events = [
        {title: '재관 만나기', start: '2023-09-01', end:'2023-09-03', color:'red'},
        {title: '민석 만나기', date: '2023-09-22'}
    ];

    return (
        <div className="App">
            <BrowserRouter>
                <Sidebar>
                </Sidebar>
                <Routes>
                    <Route path="/" exact element={<div className="CalendarContainer"><MyCalendar events={events} /></div>} />
                    <Route path="/chat" element={<div className="ChatContainer"><Chat /></div>} />
                    </Routes>
            </BrowserRouter>


        </div>



    );
}

