import React, { useRef } from 'react'; // Ajout de useRef
import './SearchForm.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchForm() {

  const checkInRef = useRef(); // Supposons que ces refs soient nécessaires
  const checkOutRef = useRef();

  return (
    <div className='position-relative'>
      <Container>
        <Form className='search-form d-lg-flex align-items-center justify-content-center mx-auto p-4 mt-4 mt-lg-0 rounded'>
          
          {/* Sélection du lieu */}
          <div className='col-lg-2'>
            <Form.Select>
              <option>Search place</option>
              <option value='1'>Hammamet</option>
              <option value='2'>Sousse</option>
              <option value='3'>Djerba</option>
              <option value='1'>Mounastir</option>
              <option value='2'>Tabarka</option>
              <option value='3'>Touzer</option>
            </Form.Select>
          </div>

          {/* Sélection du nombre de chambres */}
          <div className='col-lg-2 mx-lg-3 my-2 my-lg-0'>
            <Form.Select>
              <option>Rooms</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </Form.Select>
          </div>
            <div className='col-lg-2'>
                <Form.Control type='text' ref={checkInRef}
                 placeholder='check-in-date' onFocus={() =>
                 (checkInRef.current.type = 'date')} onBlur={() =>
                  (checkInRef.current.type = 'date')} />
            </div>
            <div className='col-lg-2 mx-lg-3 my-lg-0 my-2'>
                <Form.Control type='text' ref={checkOutRef}
                 placeholder='check-out-date' onFocus={() =>
                 (checkOutRef.current.type = 'date')} onBlur={() =>
                  (checkOutRef.current.type = 'text')} />
            </div>
            <Button variant="dark" type="submit">Search</Button>
        </Form>
      </Container>
    </div>
  );
}

export default SearchForm;
