import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
// import '../Styles/NavBar.css'; // Import your Navbar styles
// import '../Styles/logIn.css'; // Import your logIn styles
// import '../Styles/NavBarNew.css'; // Import your logIn styles

import Logo from '../Assests/books-stack-of-three.png';


const NavBar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  //Popup bar
  useEffect(() => {
    const showLoginButton = document.querySelector("#show-reg");
    const showLogin2Button = document.querySelector("#show-att");
    const showLogin3Button = document.querySelector("#show-pay");
    const showLogin4Button = document.querySelector("#show-details");
    const showLogin5Button = document.querySelector("#show-register");
    const popup = document.querySelector(".popup");
    const popup2 = document.querySelector(".popup2");
    const closeButton = document.querySelector(".close-btn");
    const closeButton2 = document.querySelector(".close-btn2");

    showLoginButton.addEventListener("click", () => {
      popup.classList.add("active");
    });
    showLogin2Button.addEventListener("click", () => {
        popup.classList.add("active");
      });
        showLogin3Button.addEventListener("click", () => {
          popup.classList.add("active");
        });
      showLogin4Button.addEventListener("click", () => {
        popup.classList.add("active");
      });
      showLogin5Button.addEventListener("click", () => {
        popup2.classList.add("active");
      }); 

    closeButton.addEventListener("click", () => {
      popup.classList.remove("active");
    });
    closeButton2.addEventListener("click", () => {
      popup2.classList.remove("active");
    });

    // Cleanup event listeners on component unmount
    return () => {
      showLoginButton.removeEventListener("click", () => {
        popup.classList.add("active");
      });
      showLogin2Button.removeEventListener("click", () => {
        popup.classList.add("active");
      });
      showLogin3Button.removeEventListener("click", () => {
        popup.classList.add("active");
      });
      showLogin4Button.removeEventListener("click", () => {
        popup.classList.add("active");
      });
      showLogin5Button.removeEventListener("click", () => {
        popup2.classList.add("active");
      });

      closeButton.removeEventListener("click", () => {
        popup.classList.remove("active");
      });
      closeButton2.removeEventListener("click", () => {
        popup2.classList.remove("active");
      });
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <Link to="/" className="navbar-logo">
            <img className="navbar-img" id="logo" src={Logo} alt="Nenasara Institute Logo" />
            <div>Nenasara Institute</div>
          </Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className={`fas ${menuVisible ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
        <div className='nav-menu-main'>
        <ul className={`nav-menu ${menuVisible ? 'active' : ''}`}>
          <li className="nav-item" id='show-reg'>
            
            <Link to="/" className="nav-links">
              Registration
            </Link>
          </li>
          <li className="nav-item" id='show-att'>
            <Link to="/" className="nav-links">
              Attendance
            </Link>
          </li>
          <li className="nav-item" id='show-pay'>
            <Link to="/" className="nav-links">
              Payments
            </Link>
          </li>
          <li className="nav-item" id='show-details'>
            <Link to="/" className="nav-links">
              Student Details
            </Link>
          </li>
          <li className='nav-signIn' id='show-register'>
          <Link to="/" className="nav-links">
          <button >Register</button>
            </Link>
         

          </li>
        </ul>
        
        </div>
        
      </div>
     
      <div className='popup'>
            <div className='close-btn'>&times;</div>
            <div className='form'>
                <h2>Log In</h2>
                <div className='form-element'>
                  <label>Position</label>
                  <select name='position'>
                    <option>Teacher</option>
                    <option>Coordinator</option>
                  </select>
                    
                </div>
                <div className='form-element'>
                    <label for="user ID">Use ID</label>
                    <input type="text" id="user ID" placeholder='Enter User ID'/>
                </div>
                <div className='form-element'>
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder='Enter password'/>
                </div>
                <div className='form-element'>
                    <label for="remember-me">Remember Me</label>
                    <input type="checkbox" id="remember-me" />
                </div>
                <div className='form-element'>
                    <button>Log In</button>
                </div>
                <div className='form-element'>
                    <a href="#">Forgot password</a>
                </div>
                
            </div>
        </div>
        <div className='popup2'>
            <div className='close-btn2'>&times;</div>
            <div className='form'>
                <h2>Register</h2>
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
                    <label for="password">Cofirm Password</label>
                    <input type="password" id="password" placeholder='confirm your password'/>
                </div>
                
                <div className='form-element'>
                    <button>Submit</button>
                </div>
                
                
            </div> 
         </div> 
        
    </nav>
    
  );
};

export default NavBar;
