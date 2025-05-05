import React from 'react'

type ComingData = {
    name :string
    courseNumber :number
    isBest :Boolean
}

function Home(props: ComingData) {
  return (
    <div>
       <div>Welcome {props.name} </div>
       <div>Number of Courses = {props.courseNumber} </div>
        <div className='isBest'>Is this the best React training? 
            {props.isBest ? <p>Yes, it is the best React training.</p> : <p>No, there are better React tutorials out there.</p>} 
        </div> 

    </div>
  )
}

export default Home