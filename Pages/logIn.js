// import React, { useEffect } from 'react'
// import '../Styles/logIn.css';

// function LogIn() {

//     useEffect(() => {
//         const showLoginButton = document.querySelector("#show-login");
//         const showLogin2Button = document.querySelector("#show-login2");
//         const popup = document.querySelector(".popup");
//         const closeButton = document.querySelector(".close-btn");
    
//         showLoginButton.addEventListener("click", () => {
//           popup.classList.add("active");
//         });
//         showLogin2Button.addEventListener("click", () => {
//             popup.classList.add("active");
//           });
    
//         closeButton.addEventListener("click", () => {
//           popup.classList.remove("active");
//         });
    
//         // Cleanup event listeners on component unmount
//         return () => {
//           showLoginButton.removeEventListener("click", () => {
//             popup.classList.add("active");
//           });
//           showLogin2Button.removeEventListener("click", () => {
//             popup.classList.add("active");
//           });
    
//           closeButton.removeEventListener("click", () => {
//             popup.classList.remove("active");
//           });
//         };
//       }, []);
//   return (
//     <div>
//         <div className='center'>
        
//         <button id="show-login">Login</button>
//         <button id="show-login2">Login2</button>
        

//         </div>

//         <div className='popup'>
//             <div className='close-btn'>&times;</div>
//             <div className='form'>
//                 <h2>Log In</h2>
//                 <div className='form-element'>
//                     <label for="email">Email</label>
//                     <input type="text" id="email" placeholder='Enter email'/>
//                 </div>
//                 <div className='form-element'>
//                     <label for="password">Password</label>
//                     <input type="password" id="password" placeholder='Enter password'/>
//                 </div>
//                 <div className='form-element'>
//                     <label for="remember-me">Remember Me</label>
//                     <input type="checkbox" id="remember-me" />
//                 </div>
//                 <div className='form-element'>
//                     <button>Sign In</button>
//                 </div>
//                 <div className='form-element'>
//                     <a href="#">Forgot password</a>
//                 </div>
                
//             </div>
//         </div>

//     </div>
    
//   )
// }

// export default LogIn