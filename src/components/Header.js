import React from 'react';
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../firebas.init';

const Header = () => {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);
  const handleSignOut =()=>{
    signOut()
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Simple React App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {user 
            ?
            <Nav.Link>
              <button onClick={handleSignOut}>
                Sign Out
              </button>
            </Nav.Link>
            :
            <Nav.Link as={Link} to="/sign-in">
              Sign in
            </Nav.Link>}
           {user && <Nav.Link as={Link} to="/dashboard">
              Dashboard
            </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;