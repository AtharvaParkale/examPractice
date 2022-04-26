import React from 'react';
import "./Navbar.css";
import { FiUser } from 'react-icons/fi';
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <div className="navBar">
            <div className="navSections navLogo">Logo</div>
            <div className="navSections navPages">
                <ul>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? "link-active" : "link")}
                        >
                            Home
                        </NavLink >
                    </li>
                    <li>
                        <NavLink
                            to="/journey"
                            className={({ isActive }) => (isActive ? "link-active" : "link")}
                        >
                            The Journey
                        </NavLink >
                    </li>
                    <li>
                        <NavLink
                            to="/team"
                            className={({ isActive }) => (isActive ? "link-active" : "link")}
                        >
                            Team
                        </NavLink >
                    </li>
                    <li>
                        <NavLink
                            to="/store"
                            className={({ isActive }) => (isActive ? "link-active" : "link")}
                        >
                            Store
                        </NavLink >
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? "link-active" : "link")}
                        >
                            Contact
                        </NavLink >
                    </li>

                </ul>
            </div>
            <div className="navSections navProfile">
                <FiUser size={24} /><span>Atharva</span>
            </div>
        </div>
    )
}

export default Navbar