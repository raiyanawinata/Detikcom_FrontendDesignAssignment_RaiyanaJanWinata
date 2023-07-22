import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderNav from './component/layout/header/HeaderNav';
import FooterNav from './component/layout/footer/FooterNav';
import About from './component/about/About';
import Update from './component/update/Update';
import Logo from './component/logo/Logo';
import Home from './component/home/Home';
import Mechanisme from './component/mekanisme/Mechanisme';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      
      
       <HeaderNav/>
      <Home/>
      <About/>
      <Mechanisme/>
      <Logo/>
      <Update/>
      <FooterNav/>
     
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
