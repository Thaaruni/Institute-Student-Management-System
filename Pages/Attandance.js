import React from 'react'
import "../Styles/Attandance.css";

function AttandancePage() {
  return (
    <div>
        <h2>Student Attandance</h2>
        <div className='selectionGrade'>
        <button>Grade 6</button>
        <button>Grade 7</button>
        <button>Grade 8</button>
        </div>
        <div className='selectionGrade'>
        <button>Grade 9</button>
        <button>Grade 10</button>
        <button>Grade 11</button>   
        </div>
       
    </div>
  )
}

export default AttandancePage;