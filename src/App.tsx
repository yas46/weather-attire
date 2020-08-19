import React, { useState } from 'react';

import './App.css';
import ZipInput from './location/zip-input';
import City from './display/city';
import DayAttire from './display/day-attire';
import { InitialData } from './interfaces-data/initial-data'

export default function App(): JSX.Element {

  interface IData {
    city: any,
    cnt: number,
    cod: string,
    list: any,
    message: number
  }

  

  const [weatherData, setData] = useState(InitialData);
  
  const renderWeatherData = (data: IData): void =>  {
    setData(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <ZipInput getData={renderWeatherData} />
      <div className='display'>
        <City data={weatherData} />
        {weatherData.list.map((element: any, i: number) => 
          <DayAttire day={i+1} data={element} key={i}/>
        )}
      </div>
    </div>
  );
  
}

