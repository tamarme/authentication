import React from 'react';
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
    return <div>
        <header>
            <nav>
                <Link to={'/'} className='home'>Home</Link>
                <Link to={'/register'}>Register</Link>
                <Link to={'/login'}>Login</Link>
            </nav>
        </header>
        <Outlet />
    </div>
};

export default Header;
