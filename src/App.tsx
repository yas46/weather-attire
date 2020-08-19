import React, { useState } from 'react';

import './App.css';
import ZipInput from './location/zip-input';
import City from './display/city';

export default function App(): JSX.Element {

  const initialData = {
    city: {
        coord: {},
        country: '',
        name: '',
        sunrise: 0,
        sunset: 0,
        timezone: 0
    },
    cnt: 0,
    cod: '',
    lists: [{}], 
    message: 0
}

  interface IData {
    city: {
        coord: Object,
        country: string,
        name: string,
        sunrise: number,
        sunset: number,
        timezone: number
    },
    cnt: number,
    cod: string,
    lists: any,
    message: number
  }

  const [weatherData, setData] = useState(initialData);
  
  const renderWeatherData = (data: IData): void =>  {
    console.log(data);
    setData(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <ZipInput getData={renderWeatherData} />
      <City data={weatherData}/>
    </div>
  );
  
}

