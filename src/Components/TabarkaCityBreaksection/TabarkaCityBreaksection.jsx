import React from 'react';
import './TabarkaCityBreaksection.css';
import TabakaCityBreakItems from '../../Assets/TabarkaCityBreakItems';
import Container from 'react-bootstrap/Container';
import CityBreakCard from '../CityBreakSection/CityBreakCard';

function TabarkaCityBreaksection() {
  return (
    <div className='city-break-section my-4 my-sm-5'>
        <Container>
            <h3 className='mb-4 mb-sm-5 text-start text-uppercase'>Tbarka city break</h3>
            <div className='row g-4'>
                {

                TabakaCityBreakItems.map((item) => <CityBreakCard 
                key={item.id}
                itemImage={item.itemImage}
                itemTitle={item.itemTitle}
                itemSubTitle={item.itemSubTitle}
                itemNights={item.itemNights}
                itemPrice={item.itemPrice}
                />)        

                }
            </div>
        </Container>
    </div>
  )
}

export default TabarkaCityBreaksection;