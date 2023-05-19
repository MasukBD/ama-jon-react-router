/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/">Shop</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/order">Order</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/inventory">Inventory</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/login">Login</NavLink>
            </div>
        </div>
    );
};

export default Header;