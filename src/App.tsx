import React from 'react';
import ZipInput from './location/zip-input'

import './App.css';

export default function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <ZipInput />
    </div>
  );
  
}

