import React from 'react';
import './FavouritesSection.css';
import Container from 'react-bootstrap/Container';

function FavouritesSection() {
  return (
    <div className='favourites-section my-4 my-sm-5'>
        <Container>
            <h3 className='text-start text-uppercase fw-semibold mb-4'>Your favourites</h3>
            <div className='row g-4'>
                <div className='col-md-3'>
                    <div className='Spa-div img-hover d-flex align-items-end justify-content-center rounded'>
                        <h4 className='text-light mb-4 h2 fw-semibold'>Spa and Wellness</h4>
                    
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className='Pool-div img-hover d-flex align-items-end justify-content-center rounded'>
                        <h4 className='text-light mb-4 h2 fw-semibold'>Swimming Pool</h4>
                    
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className='Fitness-div img-hover d-flex align-items-end justify-content-center rounded'>
                        <h4 className='text-light mb-4 h2 fw-semibold'>Fitness Center</h4>
                    
                    </div>
                </div>

                <div className='col-md-3'>
                    <div className='All-div img-hover d-flex align-items-end justify-content-center rounded'>
                        <h4 className='text-light mb-4 h2 fw-semibold'>All inclusive</h4>                    
                    </div>
                </div>


            </div>
        </Container>
        
    </div>
  )
}

export default FavouritesSection;