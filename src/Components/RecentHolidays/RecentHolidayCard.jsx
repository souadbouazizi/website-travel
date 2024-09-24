import React from 'react';
import Card from 'react-bootstrap/Card';
import Button  from 'react-bootstrap/Button';



function RecentHolidayCard(props) {
  return (
    <div className='col-md-6'>
        <Card className='shadow d-flex flex-sm-row h-100 overflow-hidden'>
            <div className='img-item img-hover col-md-6'> </div>
            <div className='col-md-6'>
                <Card.Body className='p-4'>
                    <Card.Title className='text-start text-uppercase fw-bold'>
                        {props.itemTitle}
                    </Card.Title>
                    <ul className='list-unstyled'>
                       <li className='text-start'>{props.itemDescription}</li> 
                        <li className='text-start'>{props.itemNights}</li>
                        <li className='price text-start text-green'><strong>{props.itemPrice}</strong>PP</li>
                    </ul>
                    <Button variant='dark'>view now</Button>
                </Card.Body>
            </div>
           
        </Card>
        
    </div>
  )
}

export default RecentHolidayCard;