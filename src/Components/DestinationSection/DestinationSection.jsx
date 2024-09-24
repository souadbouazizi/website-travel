import React from 'react';
import './DestinationSection.css';
import '../CityBreakSection/CityBreakSection.css';
import Container from 'react-bootstrap/Container';
import CityBreakCard from '../CityBreakSection/CityBreakCard';
import DestinationItems from '../../Assets/DestinationItems';


function DestinationSection() {
  return (
    <div className='ciry-break-section my-4 my-sm-5'>
        <Container>

        
        <h3 className='mb-4 mb-sm-5 text-start text-uppercase fw-semibold'>Your favorite winter destination</h3>
        <div className='row g-4'>
            {

             DestinationItems.map((item) => <CityBreakCard
             key={item.id}
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

export default DestinationSection;