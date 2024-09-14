import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import "../Styles/Forms.css";
import { data } from '../Components/ClassesData';

function RollRegistrationForm() {
  const [userDetails, setUserDetails] = useState({
    name: '',
    studentID: '',
    grade: '',
    classes: '',
    contact_1: '',
    contact_2: '',
    city: '', 
    
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
      ...(name === 'grade' && { classes: ''}), // Reset classes if grade change
      
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      registrationTypes: {
        ...prevDetails.registrationTypes,
        [name]: checked,
      },
    }));
  };

  const getClasses = () => {
    return userDetails.grade ? Object.keys(data[userDetails.grade].classes) : [];
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    
  };

  return (
    <div className="form-container">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className='icon'>
          <label>Name:</label>
          <input type="text" name="username" value={userDetails.name} onChange={handleInputChange} required  />  
        </div>
        <div className='icon'>
          <label>Student ID:</label>
          <input type="text" name="studentID" value={userDetails.studentID} onChange={handleInputChange} required />
        </div>
        
        <div className='icon'>
          
          <div className='location'>
            <label>Grade:</label>
            <select name="grade" value={userDetails.grade} onChange={handleInputChange} required>
              <option value="">Select Grade</option>
              {Object.keys(data).map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </div>
          <div className='location'>
            <label>Classes:</label>
            <select name="classes" value={userDetails.classes} onChange={handleInputChange} required>
              <option value="">Select Classes</option>
              {getClasses().map((classes) => (
                <option key={classes} value={classes}>
                  {classes}
                </option>
              ))}
            </select>
          </div>
          
        </div>
        <div className='icon'>
          <label>School:</label>
          <input type="text" name="school" value={userDetails.school} onChange={handleInputChange} required />
        </div>
        <div className='icon'>
          <label>Contact 1:</label>
          <input type="text" name="contact_1" value={userDetails.contact_1} onChange={handleInputChange} required />
        </div>
        <div className='icon'>
          <label>Contact 2:</label>
          <input type="text" name="contact_2" value={userDetails.contact_2} onChange={handleInputChange} required />
        </div>
        <div className='icon'>
          <label>City:</label>
          <input type="text" name="city" value={userDetails.city} onChange={handleInputChange} required />
        </div>
        <div className='submit'>
        <button type="submit">Submit</button>
        </div>
        
        
        
      </form>
      
      {/* <div className='registration-types'>
        <div className='registration-icon'>
          <label>To post an ad for your dog</label>
          <input
            type="checkbox"
            name="DogOwnerForm"
            checked={userDetails.registrationTypes.DogOwnerForm}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className='registration-icon'>
          <label>To post an ad for your vehicle</label>
          <input
            type="checkbox"
            name="VehicleOwnerForm"
            checked={userDetails.registrationTypes.VehicleOwnerForm}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className='registration-icon'>
          <label>To advertise as a dog handler</label>
          <input
            type="checkbox"
            name="DogHandlerForm"
            checked={userDetails.registrationTypes.DogHandlerForm}
            onChange={handleCheckboxChange}
          />
        </div>
        <div className='registration-icon'>
          <label>To advertise as a Veterinarian</label>
          <input
            type="checkbox"
            name="VeterinarianForm"
            checked={userDetails.registrationTypes.VeterinarianForm}
            onChange={handleCheckboxChange}
          />
        </div>
        
      </div> */}
      
    </div>
  );
}

export default RollRegistrationForm;
