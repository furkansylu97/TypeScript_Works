import React from 'react'

function EventActions() {

    const handleClick = (event:React.MouseEvent<HTMLButtonElement>, id:number) => {

    };

  return (
    <div>
        <button onClick={(event) => handleClick(event, 4)}>Delete</button>
    </div>
  )
}

export default EventActions