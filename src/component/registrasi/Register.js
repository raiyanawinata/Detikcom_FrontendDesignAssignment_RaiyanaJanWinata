import React from 'react';
import HeaderNav from '../layout/header/HeaderNav';
import FormNav from './FormNav';
import FooterNav from '../layout/footer/FooterNav';
import './regis.css';
const Register = () => {
    
    return (
        <div id='register'>
            <HeaderNav/>
            <img className="img-regis" src={require("../../assets/img/Header Title.png")}/>
            <div className='form-regis'>
                <div className="form2-regis">
                <FormNav/>
                </div>
              
            </div>

            <FooterNav/>
        </div>
    );
}

export default Register;
