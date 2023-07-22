import React from 'react';
import './about.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import twt from '../../assets/img/twitter.png';
import wa from '../../assets/img/Vector.png';
import fb from '../../assets/img/facebook.png';
import './about.css';
function About() {
  return (
    <div id='about' className="about-bg">
    <div className="about-container">
      <Card className="about-costum">
        <div style={{ display: 'flex' }}>
          <Card.Img variant="top" src={require("../../assets/img/Group 8797.png")} className="card-imga" />
          <div className="card-about">
            <Card.Body>
              <Card.Title>
              <h1 className="about-title">About DetikFinance Business Plan Competition 2023 <br/></h1>
              </Card.Title>
              <Card.Text  style={{marginTop:"2%", marginLeft:"1%"}}>
                <small className="text-about"> Detikfinance kali ini akan memberikan ruang bagi startup untuk networking dan <br/> 
                                               memamerkan produk inovasinya di hadapan venture capital dan angel investor.<br/> 
                                               Acara ini juga akan menghadirkan para pengembang teknologi dan pelaku bisnis<br/> 
                                               untuk memberikan edukasi dan inspirasi bagi masyarakat Indonesia dan
                                              teknofilia mengenai perkembangan teknologi di Indonesia.<br /></small>
                <span className="share-text">Share
                <img src={twt} className='icon-about'/>
                <img src={wa} className='icon-about'/>
                <img src={fb} className='icon-about'/>
                </span>
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
    </div>
  );
}

export default About;
