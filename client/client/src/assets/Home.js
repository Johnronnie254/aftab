import React from 'react';
import { Container } from 'react-bootstrap';
import './search.css'; 
import './Search'
import './Query'

const backgroundImage = 'https://images.unsplash.com/photo-1529369623266-f5264b696110?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function Home() {
    return (
        <div>
            <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
                <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center', color: 'black' , padding: '200px'}}>
                    <h1>Welcome to GET TOWED</h1>
                    <p>Search for your towed vehicles, file for a dispute, or proceed to pay the towing fine. We issue receipts for accountability.</p>
                </Container>
            </div>

            <footer className="main-footer" style={{background: 'orange'}}>
                <div className="footer-middle">
                    <Container>
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-4">
                                <h4>Contact Us</h4>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="/"> Phone number: +2547 96 521993 </a>
                                    </li>
                                    <li>
                                        <a href="/"> Email: gettowed@gmail.com </a>
                                    </li>
                                    <li>
                                        <a href="/"> Socials: @GetTowed </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-4">
                                <h4>About Us</h4>
                                <ul className="list-unstyled">
                                    <p> In the bid to help people involved in a car accident and are  towing  to locate their cars, we help you recover your car. We have partnered with different towing companies to make sure that you can reach us, pay the towing fine and retrieve your car. You can also place query in case you feel the towing is not justified</p>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-4">
                                <h4>Popular Links</h4>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="/search"> Search </a>
                                    </li>
                                    <li>
                                        <a href="/query"> Query </a>
                                    </li>
                                    <li>
                                        <a href="/query"> Vehicle Retrieval </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Container>
                </div>
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy; 2024 Reserved
                    </p>
                </div>
            </footer>
        </div>
    );
}
