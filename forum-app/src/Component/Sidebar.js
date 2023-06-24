import React from "react";
import "./Sidebar.css"
import { FaHome, FaBookmark, FaSearch, FaUser } from 'react-icons/fa';

export default function Sidebar() {
    return (
        <div className="sidebar">
          <ul>
            <li>
              <FaHome className="sidebar-icon" />
              Home
            </li>
            <li>
              <FaSearch className="sidebar-icon" />
              Explore
            </li>
            <li>
              <FaBookmark className="sidebar-icon" />
              Bookmarks
            </li>
            <li>
              <FaUser className="sidebar-icon" />
              Profile
            </li>
          </ul>
        </div>
      );
    };
