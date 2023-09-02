// src/components/Sidebar.js

import './Sidebar.css'
import React from "react";
import {Link, NavLink} from "react-router-dom";
import SidebarItem from "./SidebarItem";



function Sidebar() {
  const menus = [
    { name: "MyClaendar", path: "/" },
    { name: "Chat", path: "/chat" },
  ];
  return (

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
  );
}

export default Sidebar;