// Modal.jsx
import React from 'react';
import { useState } from 'react';
import '../css/Modal.css';

const Modal = ({ show, onClose, id_cell, user_text, date }) => {
  if (!show) return null;

  const [currentText, setCurrentText] = useState(user_text);

  
  const onText = (e) => {
    setCurrentText(e.target.value);
  }
  
  const handleSubmit = (e) => {
    
    let cellId = JSON.parse(localStorage.getItem(date));

    if (cellId == null) {
     cellId = {}
    }
    for (let i = 1; i <= 21; i++) {
      if (cellId[i] == null) {
        cellId[i] = "";
      }
      if (i == id_cell) {
        cellId[i] = currentText;
      }
    }


    let convertthingtojson = JSON.stringify(cellId);
    localStorage.setItem(date, convertthingtojson);
    onClose();
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Meal</h2>
        <textarea onChange={onText} value ={currentText} placeholder="Enter your text here..."></textarea>
        <button onClick={handleSubmit} className="add-button">Add/Modify</button>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
