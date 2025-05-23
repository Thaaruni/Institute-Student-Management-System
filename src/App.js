import LandingPage from './Pages/landingPage'
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import Registration from './Pages/RegistrationPage'

function App() {
  return (
    <div>
      <Router>


          <NavBar/>

          <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/Registration" element={<Registration />} />
        </Routes>

      </Router>
    </div>
  );
  }
  export default App;
