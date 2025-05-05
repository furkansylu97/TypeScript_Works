import React from 'react'

type ComingData = {
    name :string
}

function Home(props: ComingData) {
  return (
    <div>
       Welcome {props.name} 
    </div>
  )
}

export default Home