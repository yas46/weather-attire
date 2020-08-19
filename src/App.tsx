import React, { useState } from 'react';

import './App.css';
import ZipInput from './location/zip-input';

export default function App(): JSX.Element {

  const [weatherData, setData] = useState({});
  
  const renderWeatherData = (data: object): void =>  {
    console.log(data);
    setData(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <ZipInput getData={renderWeatherData} />
    </div>
  );
  
}

