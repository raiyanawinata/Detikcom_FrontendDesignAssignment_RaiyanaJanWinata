
import React from 'react';
import { Card, CardGroup, Row, Col } from 'react-bootstrap';
import './card.css';

function CardUpdate() {
  return (
    <CardGroup className="bg-custom-card">
      <Row>
        <Col md={4}>
          <Card className="bg-transparent border-0">
            <Card.Img variant="top" src={require("../../assets/img/Frame 12341.png")} className="img-card" />
            <Card.Body className="card-body2">
              <Card.Title>Alpha JWC Ventures Suntikkan Dana Segar kepada OnlinePajak dan Stoqo</Card.Title>
              <Card.Text className="card-text">
                <small className="text-muted">1 hari yang lalu</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="bg-transparent border-0">
            <Card.Img variant="top" src={require("../../assets/img/Frame 12341 (1).png")} className="img-card" />
            <Card.Body>
              <Card.Title>Startup Lifepack Rampungkan Pendanaan Seri A yang Dipimpin Golden Gate Ventures</Card.Title>
              <Card.Text className="card-text">
                <small className="text-muted">1 hari yang lalu</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="bg-transparent border-0">
            <Card.Img variant="top" src={require("../../assets/img/Frame 12341 (2).png")} className="img-card"/>
            <Card.Body>
              <Card.Title>Angel Investor Adalah? Berikut Jenis, Contoh dan Cara Mendapatkannya</Card.Title>
              <Card.Text className="card-text">
                <small className="text-muted">1 hari yang lalu</small>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Card className="bg-transparent border-0">
          <Card.Img variant="top" src={require("../../assets/img/Alpha-JWC-Ventures-Team 1.png")} className="img-card"/>
             <Card.Body>
               <Card.Title>Crowe Indonesia Gelar Diskusi terkait Valuasi Startup & Laporan ESG</Card.Title>
               <Card.Text className="card-text">
                 <small className="text-muted">1 hari yang lalu</small>
               </Card.Text>
      </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="bg-transparent border-0">
          <Card.Img variant="top" src={require("../../assets/img/Frame 12341 (3).png")} className="img-card"/>
             <Card.Body>
               <Card.Title>Startup Fresh Factory Bangun Ratusan Gudang Dingin di 103 Kota</Card.Title>
               <Card.Text className="card-text">
                 <small className="text-muted">1 hari yang lalu</small>
               </Card.Text>
             </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="bg-transparent border-0">
          <Card.Img variant="top" src={require("../../assets/img/Frame 12341 (4).png")} className="img-card"/>
             <Card.Body>
               <Card.Title>Startup Pertanian RI Dapat Pendanaan Awal, Totalnya Rp 90 M</Card.Title>
               <Card.Text className="card-text">
                 <small className="text-muted">1 hari yang lalu</small>
               </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      
    </CardGroup>
  );
}

export default CardUpdate;
