import React from "react";
import CardMechanism from "./CardMechanism";
import './mechanisme.css';

const Mechanisme = () => {
  return (
    <div id="mechanisme" className="relative h-screen font-montserrat">
      <div className="image-mechanism">
        <img
          src={require("../../assets/img/Background (1).png")}
          className="image"
          alt="hero"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="mechanism-container">
          <h1 className="text-5xl font-bold text-white mb-4">Mekanisme</h1>
          <div className="mechanism">
            <CardMechanism />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mechanisme;
