import React from 'react';
import './CityBreakSection.css'
import Container from 'react-bootstrap/Container';
import CityBreaksItems from '../../Assets/City BreaksItems';
import CityBreakCard from './CityBreakCard';

function CityBreakSection() {
  return (
    <div className='city-breaks-section my-4 my-sm-5'>
        <Container>
        <h1 className='mb-4 mb-sm-5 text-start text-uppercase fw-semibold'>
          Hammamett City breacks
          </h1>
          <div className='row g-4'>
            {
            CityBreaksItems.map((item) =>
            <CityBreakCard key={item.id} 
            itemImage={item.itemImage}
            itemTitle={item.itemTitle}
            itemSubTitle={item.itemSubTitle}
            itemNights={item.itemNights}
            itemPrice={item.itemPrice} />)

            }
          </div>
        </Container>
    </div>
  )
}

export default CityBreakSection;