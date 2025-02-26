import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { userLogout } from '../../../redux/reducers/authSlice';
import stylesheet from './header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const logoutFun = useCallback(() => {
    dispatch(userLogout());
  }, [dispatch]);
  return (
    <nav className={stylesheet.nav}>
      <NavLink to="/" className={({ isActive }) => (isActive ? stylesheet.active : "")}>Home</NavLink>
      <NavLink to="/setting" className={({ isActive }) => (isActive ? stylesheet.active : "")}>Settings</NavLink>
      <NavLink to="/profile" className={({ isActive }) => (isActive ? stylesheet.active : "")}>Profile</NavLink>
      <button onClick={logoutFun} className={stylesheet.logout_button}>Logout</button>
    </nav>
  )
}

export default Header