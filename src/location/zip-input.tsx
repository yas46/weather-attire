import React, { useState } from 'react';

type formElem = React.FormEvent<HTMLFormElement>;
type formEvent = React.FormEvent<HTMLInputElement>

interface IZip {
	getData: any;
}

export default function ZipInput(props: IZip): JSX.Element {

  const [value, setValue] = useState<string>('');

  const handleSubmit = (e: formElem): void => {
    e.preventDefault();
    fetchAsync(value);
  };

  const handleChange = (e: formEvent): void => {
    const target = e.target as HTMLTextAreaElement;

    setValue(target.value);

    target.value  !== "" 
      ? target.classList.add('filled')
      : target.classList.remove('filled');
  };
    
  const fetchAsync = (val: string) => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${val}&appid=20688421ec4a9da4fea603c3003f78bb`)
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        props.getData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  
    return (
      <form onSubmit={(e: formElem): void => handleSubmit(e)}>
        <div className="form-group">
            <input type="text" id="location" 
              value={value} 
              onBlur={(
                e: formEvent,
              ): void => handleChange(e)}
              onChange={(
                e: formEvent
              ): void => handleChange(e)}
            />
            <label htmlFor="location">zip code</label>
        </div>
      </form>
    );
  }


