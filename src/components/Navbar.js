import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                                .home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className='nav-links' onClick={closeMobileMenu}>
                                .toProjects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className='nav-links' onClick={closeMobileMenu}>
                                .findContact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar