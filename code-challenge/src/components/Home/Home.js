import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, Button, Glyphicon } from "react-bootstrap";
import "./Home.css";
import placeholder from "../../assets/placeholder.png";

class Home extends Component {
  render() {
    return (
      <div className="main-div">
        <Row className="about-div">
          <Col xs={12} md={8}>
            <h2 className="about-head">
              Strategic Wireless Infrastructure Fund
            </h2>
            <p className="about-p">
              Just like roads and bridges that carry physical traffic, wireless
              infrastrucure carries the "digital traffic" of our every day
              communications and the applications we use to stay connected to
              essential data, people, communities, and businesses
            </p>
          </Col>
          <Col xs={12} md={4}>
            <Image className="videoimg" src={placeholder} responsive />
          </Col>
        </Row>

        <Row className="wirelessDiv">
          <Col xs={12} md={2} align="center">
            <div className="glyph-wrapper">
              <Glyphicon glyph="glyphicon glyphicon-signal" />
            </div>
            <p className="no-margin-p">Asset Type</p>
            <p><strong>Wireless Infrastructure</strong></p>
          </Col>
          <Col xs={6} md={2} align="center">
            <div className="glyph-wrapper">
              <Glyphicon glyph="glyphicon glyphicon-resize-full" />
            </div>
            <p className="no-margin-p">Offering Size</p>
            <p><strong>$100,000,000</strong></p>
          </Col>
          <Col xs={6} md={2} align="center">
            <div className="glyph-wrapper">
              <Glyphicon glyph="glyphicon glyphicon-piggy-bank" />
            </div>
            <p className="no-margin-p">Minimum Investment</p>
            <p><strong>$50,000</strong></p>
          </Col>
          <Col xs={6} md={2} align="center">
            <div className="glyph-wrapper">
              <Glyphicon glyph="glyphicon glyphicon-user" />
            </div>
            <p className="no-margin-p">Investor Suitability</p>
            <p><strong>Accredited Investors Only</strong></p>
          </Col>
          <Col xs={6} md={2} align="center">
            <div className="glyph-wrapper">
              <Glyphicon glyph="glyphicon glyphicon-time" />
            </div>
            <p className="no-margin-p">How long?</p>
            <p><strong>When the clock strikes 12</strong></p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
