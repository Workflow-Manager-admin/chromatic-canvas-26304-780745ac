import React from 'react';
import './App.css';
// PUBLIC_INTERFACE
// App.js is now responsible only for bootstrapping and routing
import { BrowserRouter } from 'react-router-dom';
import MainContainer from './components/MainContainer';

/**
 * App is the root component for Chromatic Canvas.
 * Handles bootstrap and sets up the Router.
 */
function App() {
  return (
    <BrowserRouter>
      <MainContainer />
    </BrowserRouter>
  );
}

export default App;