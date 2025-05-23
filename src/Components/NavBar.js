import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css';
import { useNavigate } from 'react-router-dom';
import Logo from '../Assests/books-stack-of-three.png';

const NavBar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);
    const [popupType, setPopupType] = useState(null);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const showPopup = (type) => {
        setPopupType(type);
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                closePopup();
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="navbar-logo-container">
                        <Link to="/" className="navbar-logo">
                            <img className="navbar-img" id="logo" src={Logo} alt="Nenasara Institute Logo" />
                            <div className='InstituteName'>
                                <div>Nenasara</div>
                                <diV>Institute</diV>
                            </div>

                        </Link>
                    </div>

                    <div className="menu-icon" onClick={toggleMenu}>
                        <i className={`fas ${menuVisible ? 'fa-times' : 'fa-bars'}`}></i>
                    </div>
                    <div className='nav-menu-main'>
                        <ul className={`nav-menu ${menuVisible ? 'active' : ''}`}>
                            <li className="nav-item" onClick={() => showPopup('login1')}>
                                <Link to="/" className="nav-links">Registration</Link>
                            </li>
                            <li className="nav-item" onClick={() => showPopup('login2')}>
                                <Link to="/" className="nav-links">
                                    Attendance</Link>
                            </li>
                            <li className="nav-item" onClick={() => showPopup('login3')}>
                                <Link to="/" className="nav-links">Payments</Link>
                            </li>
                            <li className="nav-item" onClick={() => showPopup('login4')}>
                                <Link to="/" className="nav-links">Student Details</Link>
                            </li>
                            <li className='nav-signIn' onClick={() => showPopup('register')}>
                                <Link to="/" className="nav-links">
                                    <button>Register</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
};

export default NavBar;

