import React from 'react';
import './DjerbaCityBreaksection.css';
import Container from 'react-bootstrap/Container';
import DjerbaCityBreaksItems from '../../Assets/DjerbaCityBreakItems';
import CityBreakCard from '../CityBreakSection/CityBreakCard';

function DjerbaCityBreaksection() {
  return (
    <div className='city-break-section my-4 my-sm-5'>
        <Container>
            <h3 className='mb-4 mb-sm-5 text-start text-uppercase fw-semibold'>Djerba City Breaks</h3>
            <div className='row g-4'>
                {

                    DjerbaCityBreaksItems.map((item) => <CityBreakCard
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

export default DjerbaCityBreaksection;