import React from 'react';
import './NeedInsirationSection.css';
import Container from 'react-bootstrap/Container';

function NeedInsirationSection() {
  return (
    <div className='need-inspiration-section py-5 position-relative'>
        <div className='bg-shape position-absolute'></div>
        <Container>
            <div className='row'>
                <div className='col-md-4 z-2'>
                    <h2 className='text-start text-light fw-semibold'>Need inspiration ?</h2>
                    <p className='text-start text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odio deleniti neque, ratione nemo quo!</p>
                
                <div className="d-flex">
                    <h5 className='text-light text-capitalize fw-semibold text-nowrap'>Call us :</h5>
                <a href="/" className='text-light mx-2 text-decoration-none'> 00 216 97 999 999</a>
                
                </div>
                
                </div>

            </div>
        </Container>
        
    </div>
  )
}

export default NeedInsirationSection;