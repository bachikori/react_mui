import React from 'react';
import Button from '@mui/material/Button';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
