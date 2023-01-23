import React from 'react';
import { Outlet } from 'react-router-dom';
import HeroFooter from '../Shared/HeroFooter';
import HeroNavbar from '../Shared/HeroNavbar';

const Main = () => {
    return (
        <div>
            <HeroNavbar/>
            <Outlet/>
            <HeroFooter/>
        </div>
    );
};

export default Main;