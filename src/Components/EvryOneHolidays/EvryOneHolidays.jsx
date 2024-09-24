import React from 'react';
import './EvryOneHolidays.css';
import Container from 'react-bootstrap/Container';
import EvryOneHolidaysItems from '../../Assets/EvryOneHolidaysItems';
import EvryOneHolidaysCard from './EvryOneHolidaysCard';

function EvryOneHolidays() {
  return (
    <div className='evryone-holidays-section my-4 my-sm-5'>
        <Container>
            <h2 className='text-uppercase fw-semibold mb-4 mb-sm-5'>Holidays for everyone</h2>
            <div className='row g-4'>
              {
                EvryOneHolidaysItems?.map((item) => (
                  <EvryOneHolidaysCard 
                    key={item.id}
                    itemTitle={item.itemTitle}
                    itemSubtitle={item.itemSubTitle}
                    itemPrice={item.itemPrice} // Corrected prop name
                  />
                ))
              }
            </div>
        </Container>
    </div>
  );
}

export default EvryOneHolidays;
