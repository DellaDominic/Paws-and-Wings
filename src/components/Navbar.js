import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import { FaPaw } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
    IonCol,
    IonRow,
    IonHeader,
    IonToolbar,
    IonButton,
} from '@ionic/react';

const Navbar = () => {
    const [loggedInUserName, setLoggedInUserName] = useState(localStorage.getItem('login'))
    const logout = () => {
        localStorage.setItem('login', '');
        setLoggedInUserName('')
        localStorage.clear();
        window.history.pushState(null, null)
        window.location.reload();
    }
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const homeRoute = localStorage.getItem('login') ? '/login/home' : '/home';

    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <nav className="navbar">
                    <div className="navbar-container container">
                        <Link to={homeRoute} className="navbar-logo">
                            <FaPaw className="navbar-icon" onClick={closeMobileMenu} />
                            <h4 className="navbar-name">Paws & Wings</h4>
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                    </div>
                    <div className="nav-items-container">
                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink to="/about" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} >
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/work-with-us" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>
                                    Work with Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>
                                    Our Services
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                {loggedInUserName
                                    ? (<NavLink to="/my-requests" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>
                                        My Requests
                                    </NavLink>)
                                    : (<NavLink to="/login" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} >
                                        <button type="button" className="nav-button">Login</button>
                                    </NavLink>)}
                            </li>
                            <li className="nav-item">
                                {loggedInUserName
                                    ? (<NavLink to="/my-points" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} >
                                        My Points
                                    </NavLink>)
                                    : (<NavLink to="/sign-up" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} >
                                        <button type="button" className="nav-button sign-up">SignUp</button>
                                    </NavLink>)}
                            </li>
                            <li className="nav-item">
                                {loggedInUserName && (<NavLink to="/login/home" className={({ isActive }) => "nav-links name-nav-item  wel-user" + (isActive ? " activated" : "")} >
                                    {`Welcome, ${loggedInUserName}`}
                                </NavLink>)}
                            </li>
                            <li className="nav-item">
                                {loggedInUserName && (<NavLink to="/home" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")} >
                                    <button type="button" className="nav-button" onClick={logout}>LogOut</button>
                                </NavLink>)}
                            </li>
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    )
}
export default Navbar