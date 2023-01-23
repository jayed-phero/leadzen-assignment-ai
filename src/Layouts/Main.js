import React from 'react';
import { Outlet } from 'react-router-dom';
import HeroNavbar from '../Shared/HeroNavbar';

const Main = () => {
    return (
        <div>
            <HeroNavbar/>
            <Outlet/>
        </div>
    );
};

export default Main;