import NavBarNew from './Components/NavBarNew';
import LandingPage from './Pages/landingPage'
import Registration from './Pages/RegistrationPage'
import Attandance from './Pages/Attandance'


import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <NavBarNew/>
        
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Attandance" element={<Attandance />} />
        {/* <Route path="/LogIn" element={<LogInPage />} /> */}
        
        
        
            
        </Routes>

        
      

      </Router>
    </div>
  );
  }
  export default App;
