import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navibar extends Component {
    render() {
        return(
            <Navbar default collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Strategic Wireless</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>     
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                            Home
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/" to="/">
                            About Us
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} href="/" to="/">
                            Wireless Infrastructure
                        </NavItem>
                        <NavItem eventKey={4} componentClass={Link} href="/" to="/">
                            Market Trends
                        </NavItem>
                        <NavItem eventKey={5} componentClass={Link} href="/" to="/">
                            Our Strategy
                        </NavItem>
                        <NavItem eventKey={6} componentClass={Link} href="/" to="/">
                            Asset Gallery
                        </NavItem>
                        <NavItem eventKey={7} componentClass={Link} href="/" to="/">
                            Information Center
                        </NavItem>
                        <NavItem eventKey={8} componentClass={Link} href="/" to="/">
                            Log Out
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>       
            </Navbar>
        )
    }
}

export default Navibar;