import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Oldusers from './pages/Oldusers.jsx';
import Newusers from './pages/Newusers.jsx';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {
return (
    <>
    <div>
    <BrowserRouter>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/newusers">Új felhasználó</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    <Routes>
      <Route path="/" element= {<Oldusers/>} />
      <Route path="/newusers" element= {<Newusers/>} />
    </Routes>
    </BrowserRouter>
    </div>
  </>
)
}
export default App;
