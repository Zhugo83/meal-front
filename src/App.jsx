// App.js
import { useState } from 'react';
import React from 'react';
import './App.css';
import Modal from '../component/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [id_cell, setIdCell] = useState(0);
  const [currentDateNum, setCurrentDateNum] = useState(1);

  const openModal = (id_cell) => {
    return () => {
      setShowModal(true);
      setIdCell(id_cell);
    };
  };

  const closeModal = () => setShowModal(false);

  const getWeekMonday = (num=currentDateNum) => {
    let current_date = new Date();
    current_date.setDate(current_date.getDate() - current_date.getDay() + num);
    return current_date.toLocaleDateString("fr-FR", {day: "2-digit", month: "2-digit", year: "numeric"})
  }

  const loadTextValue = (id_cell) => {
    if (JSON.parse(localStorage.getItem(getWeekMonday())) == null) {
      return "";
    }
    
    let text = JSON.parse(localStorage.getItem(getWeekMonday()))[id_cell];
    return text;
  };

  const createTd = (id_cell) => {
    return <td onClick={openModal(id_cell)}>{loadTextValue(id_cell)}</td>
  }

  function displayallStorage() {
    var archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;

    for (; key = keys[i]; i++) {
        archive.push( <li>{key}</li> );
    }

    return archive;
}

  const dateNextChange = (e) => {
    setCurrentDateNum(currentDateNum + 7);
    loadTextValue(id_cell);
  }

  const datePrevChange = (e) => {
    setCurrentDateNum(currentDateNum - 7);
    loadTextValue(id_cell);
  }

  return (
    <div className="App">

    <Modal show={showModal} onClose={closeModal} id_cell={id_cell} user_text={loadTextValue(id_cell)} date={getWeekMonday()} />
      <div id="div_date">
        <button onClick={datePrevChange}>◀</button>
        <h1> {getWeekMonday()} | {getWeekMonday(currentDateNum + 7)} </h1>
        <button onClick={dateNextChange}>▶</button>
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
      <div>
        <p>List of weeks</p>
        <ul>
          <li>{displayallStorage()}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;