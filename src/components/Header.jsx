import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
         <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand ><Link style={{textDecoration:'none', color:'white'}} to={'/'}><img src='/iase.jpeg' width={35} height={35}></img>IASE, Thrissur</Link></Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link style={{textDecoration:'none', color:'white'}} to={'/data'}>Data</Link></Nav.Link>
            <Nav.Link><Link style={{textDecoration:'none', color:'white'}} to={'/tc'}>TC</Link></Nav.Link>
            <Nav.Link><Link style={{textDecoration:'none', color:'white'}} to={'/display'}>Students</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header