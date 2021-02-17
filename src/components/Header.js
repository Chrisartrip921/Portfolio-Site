import React from 'react'

import { Navbar, Nav } from 'react-bootstrap'


export default function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Chris Artrip</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">About Me</Nav.Link>
                        <Nav.Link href="#pricing">Projects</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Add something here later</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
