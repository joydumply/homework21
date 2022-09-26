import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import TestNavbar from './TestNavbar/TestNavbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        {/* <Route path='/test/' component={TestNavbar} />
        <Route exact path="/">
          <TestNavbar />
          <Button variant="contained">Hello I am Material Button</Button>
        </Route> */}

        {/* <TestNavbar /> */}
            {/* <Route path='gallery' /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
