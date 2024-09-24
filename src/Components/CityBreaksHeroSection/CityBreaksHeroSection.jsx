import React from 'react';
import './CityBreaksHeroSection.css';
import Container from 'react-bootstrap/Container';

function CityBreaksHeroSection(props) {
  return (
    <div className='city-breaks-hero-section'>
      <Container className='h-100 d-flex align-items-center justify-content-center text-light'>
        <h1 className='text-capitalize text-white'>{props.CityBreaksHeroTitle}</h1>
      </Container>
    </div>
  );
}

export default CityBreaksHeroSection;
