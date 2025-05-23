import LandingPage from './Pages/landingPage'
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./Components/NavBar";


function App() {
  return (
    <div>
      <Router>


          <NavBar/>

          <Routes>
              <Route path="/" element={<LandingPage />} />

        </Routes>

      </Router>
    </div>
  );
  }
  export default App;
