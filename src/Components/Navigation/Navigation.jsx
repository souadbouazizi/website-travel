import React from 'react';
import './Navigation.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link, useLocation } from 'react-router-dom'; // Importer useLocation pour savoir quel lien est actif
import TunisTravelLogo from '../../Assets/images/TunisTravelLogo.png';

function Navigation() {
  const location = useLocation(); // Récupère l'URL actuelle

  return (
    <Navbar expand='lg' className='sticky-top w-100 z-3 shadow'>
      <Container>
        <Navbar.Brand className='text-light'>
          <Link to='/' className='text-decoration-none text-dark d-flex'>
            <img src={TunisTravelLogo} alt='Tunis travel' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' className='text-light' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='m-auto justify-content-center'>
            <Link 
              to='/' 
              className={`nav-link text-green ${location.pathname === '/' ? 'selected' : ''}`}
            >
              Home
            </Link>
            <Link 
              to='/holidays' 
              className={`nav-link text-green ${location.pathname === '/holidays' ? 'selected' : ''}`}
            >
              Holidays
            </Link>
            <Link 
              to='/Short City-Breaks' 
              className={`nav-link text-green ${location.pathname === '/Short City-Breaks' ? 'selected' : ''}`}
            >
              Short City breaks
            </Link>
            <Link 
              to='/destinations' 
              className={`nav-link text-green ${location.pathname === '/destinations' ? 'selected' : ''}`}
            >
              Destinations
            </Link>
          </Nav>
          <Link to='/signin'>
            <Button variant='light' className='text-capitalize text-dark-nowrap'>Sign In</Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
