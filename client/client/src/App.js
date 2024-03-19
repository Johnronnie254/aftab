import React from 'react';
import NavBar from './assets/Navbar';
import Search from './assets/Search';
import Home from './assets/Home';
import Query from './assets/Query';
//import Payment from './assets/Payment';
import LogIn from './assets/LogIn';
import SignUp from './assets/SignUp';
import Payment from './assets/PaymentPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  

  return (
    <>
      <NavBar />
      <Router>
        <Routes>
        
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/query" element={<Query />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<LogIn />} />
            </>
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
