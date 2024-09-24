import React from 'react';
import Card from 'react-bootstrap/Card';


function CityBreakCard(props) {
  return (
    <div className='col-md-4'>
        <Card className='shadow h-100 overflow-hidden'>
            <Card.Img className="img-hover" variant='top' src={ props.itemImage}/>
            <Card.Body className='p-4'>
                <Card.Title className='text-start text-uppercase fw-bold mb-0'>
                    {props.itemTitle}
                </Card.Title>
                <Card.Text className='text-start mb-0'>
                    {props.itemSubTitle}
                </Card.Text>
                <div className='d-flex justify-content-between mt-4'>
                <Card.Text >{props.itemNights}</Card.Text>
                <Card.Text className='d-flex align-items-center'>
                    from 
                    <span className='fw-bold mx-2 ms-1 text-green'>
                        {props.itemPrice}
                    </span>
                    PP
                </Card.Text>
                </div>
                
            </Card.Body>
        </Card>
    </div>
  )
}

export default CityBreakCard;