import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    // const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // const showButton = () => {
    //     if (window.innerWidth <= 960) {
    //         setButton(false);
    //     } else {
    //         setButton(true);
    //     }
    // }

    // useEffect(() => {
    //     showButton();
    // }, [])

    // window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    {/* <Link to="/welcome" className="navbar-logo" onClick={closeMobileMenu}>welcome</Link> */}
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/welcome" className='nav-links' onClick={closeMobileMenu}>
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