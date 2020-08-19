import React, { useEffect, useState } from 'react';

interface IData {
    data: {
        city: {
            coord: Object,
            country: String,
            name: String,
            sunrise: Number,
            sunset: Number,
            timezone: Number
        },
        cnt: Number,
        cod: String,
        list: Array<object>,
        message: Number
    }
}

export default function City(props: any): JSX.Element {

    const [city, setCity] = useState('');

    useEffect(() => {
        setCity(props.data.city.name);
        console.log(props.data.city)
    }, [props.data.city]);


    return (
        <div className="city">
            <h2>{city}</h2>
        </div>
    );
  
}

