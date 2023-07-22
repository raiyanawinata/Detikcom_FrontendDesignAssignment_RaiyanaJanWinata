import React from 'react';
import HeaderNav from './header/HeaderNav';
import FooterNav from './footer/FooterNav';

export default function Layout(props) {
  return (
    <div id="main-layout">
      <HeaderNav />
      <main className='mt-20 py-10'>
        {props.children}
      </main>
      <FooterNav /> 
      
    </div>
  );
}
