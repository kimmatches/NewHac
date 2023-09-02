// src/components/Sidebar.js

import './Sidebar.css'
import React from "react";
import {Link, NavLink} from "react-router-dom";
import SidebarItem from "./SidebarItem";
import './Sidebar.css'



function Sidebar() {
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
                  />
                </Link>
            );
          })}
        </div>
      </div>
  );
}

export default Sidebar;