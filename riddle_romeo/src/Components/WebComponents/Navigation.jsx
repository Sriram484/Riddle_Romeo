import "../../Assets/CSS/Navigation.css"
import React, { useContext } from 'react'
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { UserStatusContext } from '../useContextComponent/UserStatusProvider';
import  Logo from "../../Assets/Images/Logo.jpeg"
// import LogoImage from '../Assets/Images/Riddle_Romeo_Logo.jpg';

const Navigation = () => {
  const { userStatus, setUserStatus } = useContext(UserStatusContext);
  var logBool = userStatus.status;

  // Conditionally render navigation links based on logBool
  let navLinks;
  if (logBool === false) {
    navLinks = (
      <React.Fragment>
        <li>
          <NavLink to="/log" style={({ isActive }) => {
            return isActive ? { color: "" } : {};
          }} replace>
            Log In
          </NavLink>
        </li>
        <li>
          <NavLink to="/sig" style={({ isActive }) => {
            return isActive ? { color: "" } : {};
          }} replace>
            Sign Up
          </NavLink>
        </li>
      </React.Fragment>
    );
  } else {
    navLinks = (
      <li>
        <NavLink to="/profile" style={({ isActive }) => {
          return isActive ? { color: "" } : {};
        }} replace>
          Your Profile
        </NavLink>
      </li>
    );
  }

  return (
    <>
      <header>
        <div id="nav_logo">
          <img src={Logo} alt="App_Logo"  style={{maxHeight:"80px",maxWidth:"80px"}}/>
        </div>

        {/* For Phone view we are creating a invisible checkbox */}
        <input type="checkbox" id="menu_check" />
        <label htmlFor="menu_check">
          <FaBars id='menu_bar' />
        </label>

        <nav className='navbar'>
          <ul>
            <li>
              <NavLink to="/home" style={({ isActive }) => {
                return isActive ? { color: "" } : {};
              }} replace>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="#" style={({ isActive }) => {
                return isActive ? { color: "" } : {};
              }} replace>
                Quiz Of The Day
              </NavLink>
            </li>
            <li>
              <NavLink to="/cus" style={({ isActive }) => {
                return isActive ? { color: "" } : {};
              }} replace>
                Custom Quiz
              </NavLink>
            </li>
            <li>
              <NavLink to="/leaderboard" style={({ isActive }) => {
                return isActive ? { color: "" } : {};
              }} replace>
                LeaderBoard
              </NavLink>
            </li>
            {navLinks} {/* Render conditional navigation links */}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navigation
