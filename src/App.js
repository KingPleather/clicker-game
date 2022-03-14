import React from 'react';
import Home from "./components/Home/home.js"
import './App.css';
import { CreditProvider } from './creditContext.js'

const App=()=> {
  return (
    <CreditProvider>
        <Home/>

    </CreditProvider>
  );
}

export default App;
