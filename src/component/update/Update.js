import React from "react";
import { Container } from "react-bootstrap";
import "./update.css";
import CardUpdate from "./CardUpdate";


const Update = () => {
  return (
    <div id="update" className="bg-custom2">
      <Container className="h-100 d-flex flex-column justify-content-start align-items-start">
        <h1 className="text-custom2 mb-4">Latest Update</h1>
      <div className="sc-2">
        <CardUpdate />
      </div>
     
     
      </Container>
      
    </div>
  );
}

export default Update;
