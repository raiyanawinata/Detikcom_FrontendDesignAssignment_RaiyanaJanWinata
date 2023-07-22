import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cardf.css';

function CardForm() {
  return (
    <div className="cardf-bg">
      <div className="cardf-container">
        <Card className="cardf-costum">
          <div>
            <div>
              <Card.Img variant="top" src={require("../../assets/img/add.png")} className="cardf-imga" />
            </div>
          </div>
        </Card>
        </div>
      </div>
        
  );
}

export default CardForm;
