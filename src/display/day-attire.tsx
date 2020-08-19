import React, { useEffect, useState } from 'react';

interface IAttire {
    day: number,
    data: any
}

export default function DayAttire(props: IAttire ): JSX.Element {

    const [attire, setAttire] = useState('');
    const [hasData, setHasData] = useState(false);

    useEffect(() => {
        if(props.data.temp.day !== 0) {
            renderAttire(props.data.temp.day);
            setHasData(true);
        }
    }, [props.data]);

    const renderAttire = (temp: number) => {
        switch(true) {
            case (temp <45):
                setAttire('thick jacket, and winter clothes');
                break;
            case (temp < 55):
                setAttire('jacket, sweater, and pants');
                break;
            case (temp < 65):
                setAttire('long sleeve shirt and pants');
                break;
            default:
                setAttire('shorts, t-shirt, and warm clothes');
                break;
          }
    }

    const renderElement = () => {
        if(hasData){
            return (<p>Day{props.day}: {attire}</p>)
        }
    }

    return (
        <div className="day-attire">
            {renderElement()}
        </div>
    );
  
}

