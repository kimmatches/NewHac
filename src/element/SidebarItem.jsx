import React from "react";
import './Sidebar.css'

function SidebarItem({menu, isActive}) {
    // return isActive === true ? (
    //
    //     <div className="sidebar-item active">
    //         <p>✔️{menu.name}</p>
    //     </div>
    //
    // ) : (
    //
    //     <div className="sidebar-item ">
    //         <p>{menu.name}</p>
    //     </div>
    //
    //
    // );
      return (
          <div className={`sidebar-item ${isActive ? 'active' : ''}`}>
        <p>
            {menu.name === 'Chat' ? '🗨️ ' : ''}
            {menu.name === 'MyCalendar' ? '🗓️ ' : ''}
             <span style={{ marginLeft: '20px' }}>{menu.name}</span>
        </p>
    </div>

    );
}

export default SidebarItem;

// import React from "react";
// import { Link } from "react-router-dom";
// import './Sidebar.css';
//
// function SidebarItem({ menu, isActive, onClick }) {
//   const handleClick = () => {
//     onClick(menu); // 클릭 이벤트 핸들러 호출
//   };
//
//   return (
//     <div
//       className={`sidebar-item ${isActive ? 'active' : ''}`}
//       onClick={handleClick}
//     >
//       <Link to={menu.path}>
//         <p>
//           {menu.name === 'Chat' ? '✔️' : ''}
//           {menu.name === 'MyCalendar' ? '🦁' : ''}
//           {menu.name}
//         </p>
//       </Link>
//     </div>
//   );
// }
//
// export default SidebarItem;
//
