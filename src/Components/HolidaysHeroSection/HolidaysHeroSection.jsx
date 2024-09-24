import React from 'react';
import './HolidaysHeroSection.css';
import Container from 'react-bootstrap/Container';



function HolidaysHeroSection(props) {
  return (
    <div className='holiday-hero-section'>
        <Container className='h-100 d-flex align-items-center justify-content-center text-light'>
            <h1 className='text-capitalize text-white'> {props.HolidaysHeroTitle}</h1>

        </Container>
        
    </div>
  )
}

export default HolidaysHeroSection;