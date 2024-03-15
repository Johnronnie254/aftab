import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom'; // Import useHistory hook from react-router-dom
import { Button, Form, Container } from 'react-bootstrap';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  //const history = useHistory(); // Access the history object

  const handleSubmit = (event) => {
    event.preventDefault();
    handleNewSignUp(formData);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNewSignUp = (formData) => {
    fetch("http://127.0.0.1:5000/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Log response data to check
      alert("You have successfully Signed Up!");
      setFormData({
        username: '',
        email: '',
        password: ''
      });
      // Redirect to login page after successful sign-up
      //history.push("/LogIn");
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
      alert("There was an error while signing up. Please try again later.");
    });
  };

  return (
    <Container style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#dcdcdc' }}>
      <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', background: 'white' }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" value={formData.email} placeholder="Enter email" onChange={handleInput} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="username" value={formData.username} placeholder="Username" onChange={handleInput} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={formData.password} placeholder="Password" onChange={handleInput} />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Sign Up
          </Button>
          
        </Form>
        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <p>Already have an account? <a href="/LogIn">Login</a></p>
        </div>
      </div>
    </Container>
  );
}

export default SignUp;
