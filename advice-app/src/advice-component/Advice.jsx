// import React from 'react'
import dice from "../img/icon-dice.svg";
import "../index.css";
import deskDivider from "../img/pattern-divider-desktop.svg";
import miniDivider from "../img/pattern-divider-mobile.svg";
import { useState, useEffect } from "react";

const Advice = () => {
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setData(data.slip);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="card">
        <h1 className="idNo">ADVICE #{data.id}</h1>
        <p className="advice">{data.advice}</p>
        <img src={deskDivider} className="desk-divider" />
        <img src={miniDivider} className="mini-divider" />
        <button className="dice" onClick={fetchData}>
          <img src={dice} />
        </button>
      </div>
    </div>
  );
};

export default Advice;
