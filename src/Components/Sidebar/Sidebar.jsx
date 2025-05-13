import React from 'react';
import './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="icon menu-icon">
        <i className="fas fa-bars"></i>
      </div>
      <div className="icon plus-icon">
        <i className="fas fa-plus"></i>
      </div>
      <div className="icon heart-icon">
        <i className="fas fa-heart"></i>
      </div>
      <div className="icon taxi-mania-icon">
        <img src="/assets/taxi-mania.jpg" alt="Taxi Mania" />
      </div>
    </aside>
  );
};

export default Sidebar;
