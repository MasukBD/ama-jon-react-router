/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './HomePage.css'

const HomePage = () => {
    return (
        <div className='home-page'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default HomePage;