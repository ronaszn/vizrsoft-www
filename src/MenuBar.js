import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Nav, NavItem, NavDropDown, MenuItem} from 'react-bootstrap';

// TODO
// About Us /about-us
// Locations /locations
// Contact Us /contact-us
// Products /products

class MenuBar extends React.Component {
    render() {
        return (
        <Navbar bg='dark' expand='lg'>
            <Navbar.Brand href="home">VZRSoft</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="nav-link" href="about-us">About Us</Nav.Link>
                    <Nav.Link className="nav-link" href="locations">Locations</Nav.Link>
                    <Nav.Link className="nav-link" href="contact-us">Contact Us</Nav.Link>
                    <Nav.Link className="nav-link" href="products">Products</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}

export default MenuBar;