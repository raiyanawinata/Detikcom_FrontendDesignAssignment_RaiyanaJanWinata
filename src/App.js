import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderNav from './component/layout/header/HeaderNav';
import FooterNav from './component/layout/footer/FooterNav';
import About from './component/about/About';
import Update from './component/update/Update';
import Logo from './component/logo/Logo';
import Home from './component/home/Home';
import Mechanisme from './component/mekanisme/Mechanisme';
import Layout from './component/layout/Layout';
import Register from './component/registrasi/Register';

const App = () => {
 

  return (
    <div>
     
      <Routes>
       
        <Route path="/register" element={<Register />}></Route>
      </Routes>
     
    </div>
  );
}

export default App;


