import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function TowingCompany(){
    const [car, setCar] = useState({
        vehicle_id: '',
        vehicle_plate_number: '',
        reason_towing: '',
        location: '',
        date_of_towing: '',
        fine_amount: '',
        towing_company: '',
        towing_email: '',
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        setCar({
            ...car,
            [name]: value
        });
    }

    function handleNewPleadQuery() {
    const item = {
        vehicle_id: car.vehicle_id,
        vehicle_plate_number: car.vehicle_plate_number,
        reason_towing: car.reason_towing,
        location: car.location,
        date_of_towing: car.date_of_towing,
        fine_amount: car.fine_amount,
        towing_company: car.towing_company,
        towing_email: car.towing_email,
    };
        fetch("http://127.0.0.1:5000/pleadquery", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item),
        })
        .then((r) => r.json())
        .then((data) => handleNewPleadQuery(data))
        setCar({
            vehicle_id: '',
            vehicle_plate_number: '',
            reason_towing: '',
            location: '',
            date_of_towing: '',
            fine_amount: '',
            towing_company: '',
            towing_email: '',
        })
        alert("New Vehicle successfully added!");
    }

    return(
    <h1>List of our Towed Vehicles</h1>
    
    <p>This is to help increase accountability of all the vehicles towed. Kindly add vehicles towed and update status whether finished or pending</p>
    <h2>Fill the below form to enter car details</h2>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicText">
        <Form.Label>Vehicle ID</Form.Label>
        <Form.Control type="text" placeholder="Vehicle ID" />
        
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