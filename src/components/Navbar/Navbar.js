import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="nav">
                <Link to="/" className='logotip'>Weather<span>Info</span> </Link>
                <ul>
                    <li>
                        <NavLink to="/firstpage">First page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/secondpage">Second page</NavLink>
                    </li>
                </ul>
            </nav>
        </>

    );
};

export default Navbar;