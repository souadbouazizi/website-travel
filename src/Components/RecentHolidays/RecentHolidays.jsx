import React from 'react';
import './RecentHolidays.css';
import Container from 'react-bootstrap/Container';
import RecentHolidaysItems from '../../Assets/RecentHolidaysItem.js';
import RecentHolidayCard from './RecentHolidayCard.jsx';

function RecentHolidays() {
  return (
    <div className='recent-holidays my-4 my-sm-5'>
      <Container>
        <h2 className='text-uppercase fw-semibold mb-4 mb-sm-5'>Recent holidays</h2>
        <div className='row g-4'>
          {
            RecentHolidaysItems.map((item) => (
              <RecentHolidayCard
                key={item.id}
                itemImage={item.itemImage}
                itemTitle={item.itemTitle}
                itemDescription={item.itemDescription}
                itemNight={item.itemNights}
                itemPrice={item.itemPrice}
              />
            ))
          }
        </div>
      </Container>
    </div>
  );
}

export default RecentHolidays;
