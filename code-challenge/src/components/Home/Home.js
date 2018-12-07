import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, Button, Glyphicon, Modal } from "react-bootstrap";
import "./Home.css";
import placeholder from "../../assets/placeholder.png";
import Trends from "../Trends/Trends";
import Strategy from "../Strategy/Strategy";
import Gallery from "../Gallery/Gallery";
import Info from "../Info/Info";

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="main-div" id="mainContainer">
        <Row className="about-div" id="aboutDiv">
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
            <Image
              className="videoimg"
              src={placeholder}
              onClick={this.handleShow}
              responsive
            />
          </Col>
        </Row>

        <Row className="wirelessDiv" id="wirelessDiv">
          <Col xs={12} md={2} align="center">
            <div className="glyph-wrapper">
              <Glyphicon glyph="glyphicon glyphicon-signal" />
            </div>
            <p className="no-margin-p">Asset Type</p>
            <p>
              <strong>Wireless Infrastructure</strong>
            </p>
          </Col>
          <Col xs={12} md={2} align="center">
            <div className="glyph-wrapper">
              <Glyphicon glyph="glyphicon glyphicon-resize-full" />
            </div>
            <p className="no-margin-p">Offering Size</p>
            <p>
              <strong>$100,000,000</strong>
            </p>
          </Col>
          <Col xs={12} md={2} align="center">
            <div className="glyph-wrapper">
              <Glyphicon glyph="glyphicon glyphicon-piggy-bank" />
            </div>
            <p className="no-margin-p">Minimum Investment</p>
            <p>
              <strong>$50,000</strong>
            </p>
          </Col>
          <Col xs={12} md={2} align="center">
            <div className="glyph-wrapper">
              <Glyphicon glyph="glyphicon glyphicon-user" />
            </div>
            <p className="no-margin-p">Investor Suitability</p>
            <p>
              <strong>Accredited Investors Only</strong>
            </p>
          </Col>
          <Col xs={12} md={2} align="center">
            <div className="glyph-wrapper">
              <Glyphicon glyph="glyphicon glyphicon-time" />
            </div>
            <p className="no-margin-p">How long?</p>
            <p>
              <strong>When the clock strikes 12</strong>
            </p>
          </Col>
        </Row>
        <div id="trendsDiv">
          <Trends />
        </div>
        <div id="strategyDiv">
          <Strategy />
        </div>
        <div id="galleryDiv">
          <Gallery />
        </div>
        <div id="infoDiv">
          <Info />
        </div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <Glyphicon glyph="glyphicon glyphicon-search" /> Media Player
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Image className="videoimg" src={placeholder} responsive />
          </Modal.Body>
          <Modal.Footer>
            <Button className="modal-close" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <button className="invest-btn">
          <Row>
            <Col xsHidden md={11} className="CTA-btn">
              <span><strong>Ready to Invest?</strong></span>
            </Col>
            <Col xs={12} md={1}>
              <Glyphicon glyph="glyphicon glyphicon-pencil" />
            </Col>
          </Row>
        </button>
      </div>
    );
  }
}

export default Home;
