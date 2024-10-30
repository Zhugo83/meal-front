// App.js
import { useState } from 'react';
import React from 'react';
import './App.css';
import Modal from '../component/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [id_cell, setIdCell] = useState(0);
  const [date, setDate] = useState("");

  const openModal = (id_cell) => {
    return () => {
      setShowModal(true);
      setIdCell(id_cell);
    };
  };

  const closeModal = () => setShowModal(false);

  // let stuff = {1 : "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "",
  //              8: "", 9: "", 10: "", 11: "", 12: "", 13: "", 14: "",
  //              15: "", 16: "", 17: "", 18: "", 19: "", 20: "", 21: ""}

  // let localstorage = {
  //   date: {stuff},
  // }
  
    
  const loadTextValue = (id_cell) => {
    let text = localStorage.getItem(id_cell) || "";
    return text;
  };

  const createTd = (id_cell) => {
    return <td onClick={openModal(id_cell)}>{loadTextValue(id_cell)}</td>
  }

  const getWeekMonday = (num=1) => {
    let current_date = new Date();
    current_date.setDate(current_date.getDate() - current_date.getDay() + num);
    return current_date.toLocaleDateString("fr-FR", {day: "2-digit", month: "2-digit", year: "numeric"})
  }

  console.log(getWeekMonday())

  return (
    <div className="App">

    <Modal show={showModal} onClose={closeModal} id_cell={id_cell} user_text={loadTextValue(id_cell)} />
      <div id="div_date">
        <button>◀</button>
        <h1> {getWeekMonday()} | {getWeekMonday(8)} </h1>
        <button>▶</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Meal</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Breakfast</td>
            {createTd(1)}
            {createTd(2)}
            {createTd(3)}
            {createTd(4)}
            {createTd(5)}
            {createTd(6)}
            {createTd(7)}
          </tr>
          <tr>
            <td>Lunch</td>
            {createTd(8)}
            {createTd(9)}
            {createTd(10)}
            {createTd(11)}
            {createTd(12)}
            {createTd(13)}
            {createTd(14)}
          </tr>
          <tr>
            <td>Dinner</td>
            {createTd(15)}
            {createTd(16)}
            {createTd(17)}
            {createTd(18)}
            {createTd(19)}
            {createTd(20)}
            {createTd(21)}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;