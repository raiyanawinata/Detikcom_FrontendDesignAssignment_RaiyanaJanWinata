import React from 'react';
import './home.css';
import Register from '../registrasi/Register';
import { useNavigate } from 'react-router';
import { to } from 'react-spring';

function Home() {
//   const handleRegisterClick = () =>{
//     window.location.href={<Register/>};
// }
  return (
    <div id='home' className="relative h-screen font-montserrat">
      <div className="image-container">
        <img
          src={require("../../assets/img/Background.png")}
          className="image"
          alt="hero"
        />
      </div>
      <div className="absolute2 inset-0 flex flex-col items-center justify-center text-center my-auto">
        <h1 className="text-4xl2 leading-tight text-white my-1">
          <span className="text-2xl2 leading-4">Detikfinance Business Plan Competition 2023</span>
        </h1>
        <h2 className="text-5xl2 font-extrabold leading-tight text-white my-2">
          Empowering Indonesia Startup
        </h2>
        <p className="text-sm2 leading-5 text-white my-1">
          <span className="text-xs2 leading-4 font-normal">
            Detikfinance memberikan ruang kepada para startup di Indonesia untuk menunjukkan, serta mempromosikan brand <br />mereka untuk mendapatkan perhatian dari venture capital atau angel investor
          </span>
        </p>
        <div className="flex justify-center2">
          <button className="bg-3EB7DD2 text-white font-bold rounded-lg py-2 px-4 w-40 h-10">
            Daftarkan startup kamu
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
