import React, { Component } from "react";
import { Navbar, Nav, NavItem, Image } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
import "./Navbar.css";
import mainLogo from "../../assets/mainLogo.png";

class Navibar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">
              <Image id="logo-img" src={mainLogo} responsive />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1}>
              <NavLink smooth to="../Home#aboutDiv">
                Home
              </NavLink>
            </NavItem>
            <NavItem eventKey={2}>
              <NavLink smooth to="../Home#aboutDiv">
                About Us
              </NavLink>
            </NavItem>
            <NavItem eventKey={3}>
              <NavLink smooth to="../Home#wirelessDiv">
                Wireless Infrastructure
              </NavLink>
            </NavItem>
            <NavItem eventKey={4}>
              <NavLink smooth to="../Home#trendsDiv">
                Market Trends
              </NavLink>
            </NavItem>
            <NavItem eventKey={5}>
              <NavLink smooth to="../Home#strategyDiv">
                Our Strategy
              </NavLink>
            </NavItem>
            <NavItem eventKey={6}>
              <NavLink smooth to="../Home#galleryDiv">
                Asset Gallery
              </NavLink>
            </NavItem>
            <NavItem eventKey={7}>
              <NavLink smooth to="../Home#infoDiv">
                Information Center
              </NavLink>
            </NavItem>
            <NavItem eventKey={8}>Log Out</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navibar;
