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