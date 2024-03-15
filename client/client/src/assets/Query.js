import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Query() {
    const [query, setQuery] = useState({
        query: '',
        comment: '',
        date: '',
        vehicle_id: ''
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setQuery({
            ...query,
            [name]: value
        });
    }

    function handleNewPleadQuery() {
    const item = {
        query: query.query,
        comment: query.comment,
        date: query.date,
        vehicle_id: query.vehicle_id
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
        setQuery({
            query: '',
            comment: '',
            date: '',
            vehicle_id: ''
        })
        alert("Query created successfully!");
    }

    return (
        <Container style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'orange' }}>
            <div style= {{alignItems:'center', textAlign: 'center', padding: ' 40px 40px'}}>
                <h1> FILE FOR A DISPUTE</h1>
                <p>Feeling that your vehicle was towed for the wrong reason? Kindly file a query and our team will get back to you in 24 hours</p>
            </div>
            <Form >
                <Form.Group as={Row} className="mb-3">
                    <Form.Label column sm={2}>Reasons of Towing:</Form.Label>
                    <Col sm={10}>
                        <Form.Group className="mb-3" controlId="formTowing">
                            
                            <Form.Control type="text" placeholder="enter reason for towing" name="query" value={query.query} onChange={handleInput} />
                        </Form.Group>
                    </Col>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Comments:</Form.Label>
                    <Form.Control as="textarea" rows={3} name="comment" value={query.comment} onChange={handleInput} />
                </Form.Group>
                <Row className="mb-3">
                    <Col>
                        <Form.Control type="text" placeholder="Date" name="date" value={query.date} onChange={handleInput} />
                    </Col>
                    <Col>
                        <Form.Control type="text" placeholder="Vehicle ID" name="vehicle_id" value={query.vehicle_id} onChange={handleInput} />
                    </Col>
                </Row>
                <Button variant="primary" type="submit" onClick = {handleNewPleadQuery}>Submit</Button>
            </Form>
        </Container>
    );
}

export default Query;
