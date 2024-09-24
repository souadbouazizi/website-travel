import React from 'react';
import './HeroSection.css'; // Vérifiez que ce fichier existe bien et est au bon chemin
import Carousel from 'react-bootstrap/Carousel'; // Utilisation correcte du Carousel
import GreenBtn from '../GreenBtn/GreenBtn';

function HeroSection() {
  return (
    <div className='hero-section'>
      <Carousel>
        <Carousel.Item className='carousel-item1 vh-100'>
          <Carousel.Caption className='h-100 d-flex flex-column align-items-center justify-content-start'>
            <div className='row h-100'>
              <div className='col-lg-6 d-flex flex-column align-items-start justify-content-center'>
                <h1 className='text-capitalize text-start text-white'>Find your perfect holiday</h1>
                <p className='text-start'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptates ipsa non vitae reprehenderit officia distinctio aliquam, est iusto harum.
                </p>
                <GreenBtn btnTitle='check our holidays' btnLink='/holidays' />
              </div>
              <div className='col-lg-6 d-none d-lg-block'>

              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item2 vh-100'>
          <Carousel.Caption className='h-100'>
            <div className='row h-100'>
              <div className='col-lg-6 d-flex flex-column align-items-start justify-content-center'>
                <h1 className='text-capitalize text-start text-white'>Do you need a city break?</h1>
                <p className='text-start'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptates ipsa non vitae reprehenderit officia distinctio aliquam, est iusto harum.
                </p>
                <GreenBtn btnTitle='Our city breaks' btnLink='/Short City-Breaks' />
              </div>
              <div className='col-lg-6 d-none d-lg-block'>
                
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='carousel-item3 vh-100'>
          <Carousel.Caption className='h-100'>
            <div className='row h-100'>
            <div className='col-lg-6 d-none d-lg-block'>
                
                </div>
              <div className='col-lg-6 d-flex flex-column align-items-end justify-content-center'>
                <h1 className='text-capitalize text-start text-white'>Travel anywhere</h1>
                <p className='text-start'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptates ipsa non vitae reprehenderit officia distinctio aliquam, est iusto harum.
                </p>
                <GreenBtn btnTitle='check all destination' btnLink='/destinations' />
              </div>
            
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroSection;
