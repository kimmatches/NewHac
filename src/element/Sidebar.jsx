// src/components/Sidebar.js

import './Sidebar.css'
import React from "react";
import {Link, NavLink, useLocation} from "react-router-dom";
import SidebarItem from "./SidebarItem";
import './Sidebar.css'





function Sidebar() {
    const pathName = useLocation().pathname;
  const menus = [
    { name: "MyCalendar", path: "/" },
    { name: "Chat", path: "/chat" },
  ];
  return (
    <div>
        <div className="sidebar">
          {menus.map((menu, index) => {
            return (
                <Link to={menu.path} key={index}>
                  <SidebarItem
                      menu={menu}
                       isActive={pathName === menu.path ? true : false}
                  />
                </Link>
            );
          })}
        </div>
      </div>
  );
}

export default Sidebar;

// import './Sidebar.css';
// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import SidebarItem from "./SidebarItem";
//
// function Sidebar() {
//   const pathName = useLocation().pathname;
//
//   const menus = [
//     { name: "MyCalendar", path: "/" },
//     { name: "Chat", path: "/chat" },
//   ];
//
//   const handleMenuClick = () => {
//     // 클릭 이벤트 핸들러를 이용하여 클릭 시 작업 수행 (예: 메뉴 닫기)
//   };
//
//   return (
//     <div className="sidebar">
//       {menus.map((menu, index) => (
//         <Link to={menu.path} key={index}>
//           <SidebarItem
//             menu={menu}
//             isActive={pathName === menu.path}
//             onClick={handleMenuClick} // 클릭 이벤트 핸들러 전달
//           />
//         </Link>
//       ))}
//     </div>
//   );
// }
//
// export default Sidebar;
