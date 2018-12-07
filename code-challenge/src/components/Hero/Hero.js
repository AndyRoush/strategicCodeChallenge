import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import heroimg from "../../assets/heroimg.PNG";
import "./Hero.css";

const hero = () => {
  return (
    <Row>
      <Col xs={12}>
        <Image className="main-img" responsive src={heroimg} />
      </Col>
    </Row>
  );
};

export default hero;
