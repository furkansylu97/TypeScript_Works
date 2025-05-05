import React from 'react'
import { useState } from 'react';

function EventActions() {

    const [value, setvValue] = useState('');

    const handleClick = (event:React.MouseEvent<HTMLButtonElement>, id:number) => {

    };

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setvValue(event.target.value)
    };

  return (
    <div>
        <button onClick={(event) => handleClick(event, 4)}>Delete</button>
        <input type="text" value={value} onChange={handleChange} />
    </div>
  )
}

export default EventActions