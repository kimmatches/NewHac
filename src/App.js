import './App.css';
import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

import Sidebar from "./element/Sidebar";
import SidebarItem from "./element/SidebarItem";
import MyCalendar from "./pages/MyCalender";
import Chat from "./pages/Chat"
import axios from "axios";


export default function App() {

    // const events = [
    //     {title: '재관 만나기', start: '2023-09-01', end:'2023-09-03', color:'red'},
    //     {title: '민석 만나기', date: '2023-09-22', color:'#546563'},
    //      {title: '민석 만나기', date: '2023-09-24', color:'#456485'},
    //      {title: '민석 만나기', date: '2023-09-21', color:'#544864'},
    //      {title: '민석 만나기', date: '2023-09-27', color:'#989755'},
    // ];
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // 백엔드 API에서 데이터를 가져오는 함수를 호출합니다.
        async function fetchEvents() {
            try {
                // Axios를 사용하여 GET 요청을 보냅니다. 백엔드 API의 엔드포인트를 지정해야 합니다.
                const response = await axios.get('http://124.54.16.127:8080/api/v1/calendar?year=2023&month=9');

                // API로부터 받아온 데이터를 events 상태로 설정합니다.
                setEvents(response.data);
            } catch (error) {
                // 오류 처리를 구현합니다. 오류 메시지를 출력하거나 다른 오류 핸들링 작업을 수행합니다.
                console.error('Error fetching events:', error);
            }
        }

        // 데이터를 가져오는 함수를 호출합니다.
        fetchEvents();
    }, []); // 빈 배열을 두 번째 인수로 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 합니다.

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

