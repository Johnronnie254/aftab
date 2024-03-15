import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import SignUp from './SignUp'; // Import SignUp component
import Cookies from 'js-cookie';

function LogIn() {
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    

    fetch("http://127.0.0.1:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((responseData) => {
      const access = responseData.tokens.access
      console.log(access, "hellow world");
      Cookies.set("access", access)
       // Log response data to check
      // Clear the form after successful login
      setData({
        username: '',
        password: '',
      });
      
      // Display an alert message
      alert("Login successful!");
      // Handle login success (e.g., redirect to dashboard)
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
      // Handle login failure (e.g., show error message)
    });
  };

  return (
    <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#dcdcdc' }}>
      <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', background: 'white' }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" name="username" value={data.username} onChange={handleInputChange} placeholder="Username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" value={data.password} onChange={handleInputChange} placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Log In
          </Button>
        </Form>
        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <p>Don't have an account? <a href="/SignUp">Sign Up</a></p> {/* Ensure proper route for SignUp page */}
        </div>
      </div>
    </Container>
  );
}

export default LogIn;
