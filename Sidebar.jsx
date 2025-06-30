import React from "react";
import { NavLink, Link } from "react-router-dom"; // Use only if using React Router
import logo from "../assets/logo.png"; // Adjust to your project structure
import {
  BiGridAlt,
  BiNetworkChart,
  BiUser,
  BiBook,
  BiCreditCard,
  BiMessageSquareDetail,
  BiLogOut,
} from "react-icons/bi";
import "../styles/Sidebar.css"; // Use .css or .module.css based on your setup

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="logoContainer d-flex justify-content-center ms-2">
        <img src={logo} alt="Tikare Logo" width={140} height={140} />
      </div>

      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/dashboard" className="nav-link">
              <BiGridAlt /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/FleetManager" className="nav-link">
              <BiBook /> Fleet Manager
            </NavLink>
          </li>
          <li>
            <NavLink to="/home/shopowner" className="nav-link">
              <BiNetworkChart /> Shopowner
            </NavLink>
          </li>
          
          <li>
            <NavLink to="/home/Jobs" className="nav-link">
              <BiCreditCard /> Jobs
            </NavLink>
          </li>
          <li>
                  <a
                    href="#logoutModal"
                    data-bs-toggle="modal"
                    data-bs-target="#logoutModal"
                    className="nav-link bg-logout-color text-white custom-logout-link mt-5">
                    <BiLogOut /> Logout
                  </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
