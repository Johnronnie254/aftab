import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function TowingCompany(){

    return(
    <h1>List of our Towed Vehicles</h1>
    
    <p>This is to help increase accountability of all the vehicles towed. Kindly add vehicles towed and update status whether finished or pending</p>
    <h2>Fill the below form to enter car details</h2>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Vehicle</Form.Label>
        <Form.Control type="text" placeholder="Plate Number" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Vehicle Plate Number</Form.Label>
        <Form.Control type="text" placeholder="Plate Number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Reason for Towing</Form.Label>
        <Form.Control type="text" placeholder="Reason for Towing" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="location" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Date of Towing</Form.Label>
        <Form.Control type="text" placeholder="Date of Towing" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Fine Amount</Form.Label>
        <Form.Control type="text" placeholder="Fine Amount" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Towing Company</Form.Label>
        <Form.Control type="text" placeholder="Towing Company" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Towing Company Email</Form.Label>
        <Form.Control type="email" placeholder="Towing Company Email" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


    )


}