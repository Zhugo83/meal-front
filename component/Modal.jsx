// Modal.jsx
import React from 'react';
import { useState } from 'react';
import '../css/Modal.css';

const Modal = ({ show, onClose, id_cell, user_text }) => {
  if (!show) return null;

  const [currentText, setCurrentText] = useState(user_text);

  
  const onText = (e) => {
    setCurrentText(e.target.value);
  }
  
  const handleSubmit = (e) => {
    
    localStorage.setItem(id_cell, currentText);

    // let stuff = {1 : "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "",
    //            8: "", 9: "", 10: "", 11: "", 12: "", 13: "", 14: "",
    //            15: "", 16: "", 17: "", 18: "", 19: "", 20: "", 21: ""}


    // let thing = {date: {stuff}}
    // let convertthingtojson = JSON.stringify(thing);
    // localStorage.setItem(id_cell, convertthingtojson);
    onClose();
  }

  const getWeekMonday = (num=1) => {
    let current_date = new Date();
    current_date.setDate(current_date.getDate() - current_date.getDay() + num);
    return current_date.toLocaleDateString("fr-FR", {day: "2-digit", month: "2-digit", year: "numeric"})
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Meal</h2>
        <textarea onChange={onText} value ={currentText} placeholder="Enter your text here..."></textarea>
        <button onClick={handleSubmit} className="add-button">Add</button>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
