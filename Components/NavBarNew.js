// src/components/NavBar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavBarNew.css';
// import '../Styles/logIn.css';

import Logo from '../Assests/books-stack-of-three.png';

const NavBarNew = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupType, setPopupType] = useState(null);

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
              <li className="nav-item" onClick={() => showPopup('login')}>
                <Link to="/" className="nav-links">Registration</Link>
              </li>
              <li className="nav-item" onClick={() => showPopup('login')}>
                <Link to="/" className="nav-links">Attendance</Link>
              </li>
              <li className="nav-item" onClick={() => showPopup('login')}>
                <Link to="/" className="nav-links">Payments</Link>
              </li>
              <li className="nav-item" onClick={() => showPopup('login')}>
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

      {popupVisible && <div className="backdrop active" onClick={closePopup}></div>}
      <div className={`popup ${popupVisible && popupType === 'login' ? 'active' : ''}`}>
        <div className="close-btn" onClick={closePopup}>×</div>
        <div className="form">
          <h2>Login</h2>
          <div className='form-element'>
                  <label>Position</label>
                  <select name='position'>
                    <option>Teacher</option>
                    <option>Coordinator</option>
                  </select>
                    
                </div>
                <div className='form-element'>
                    <label >Use ID</label>
                    <input type="text" placeholder='Enter User ID'/>
                </div>
                <div className='form-element'>
                    <label >Password</label>
                    <input type="password"  placeholder='Enter password'/>
                </div>
                <div className='form-element'>
                    <label >Remember Me</label>
                    <input type="checkbox"  />
                </div>
                <div className='form-element'>
                    <button>Log In</button>
                </div>
                <div className='form-element'>
                    <a href="#">Forgot password</a>
                </div>
        </div>
      </div>
      <div className={`popup2 ${popupVisible && popupType === 'register' ? 'active' : ''}`}>
        <div className="close-btn2" onClick={closePopup}>×</div>
        <div className="form">
          <h2>Registration</h2>
          <div className='form-element'>
                  <label>Position</label>
                  <select name='position'>
                    <option>Teacher</option>
                    <option>Coordinator</option>
                  </select>
                    
                </div>
                <div className='form-element'>
                    <label for="name">Name</label>
                    <input type="text" id="name" placeholder='Enter Full name'/>
                </div>
                <div className='form-element'>
                    <label for="user ID">Use ID</label>
                    <input type="text" id="user ID" placeholder='Create User ID'/>
                    <p>User Id must have uppercase and lower case with symbols</p>
                </div>
                <div className='form-element'>
                    <label for="password">New Password</label>
                    <input type="password" id="password" placeholder='Enter new password'/>
                </div>
                <div className='form-element'>
                    <label for="password">Confirm Password</label>
                    <input type="password" id="password" placeholder='confirm your password'/>
                </div>
                
                <div className='form-element'>
                    <button>Submit</button>
                </div>
        </div>
      </div>
    </>
  );
};

export default NavBarNew;
