import React from 'react';
import './SaharaDestination.css';
import Container from 'react-bootstrap/Container';

function SaharaDestination(props) {
  return (
    <div className='sahara-destination'>
        <Container className='h-100 d-flex align-items-center justify-content-center text-light'>
        <h1 className='text-capitalize text-white'>
          {props.SaharaDestinationTitle}
        </h1>
          </Container>
    </div>
  )
}

export default SaharaDestination;


