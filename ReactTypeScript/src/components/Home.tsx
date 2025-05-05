import React from 'react'

type ComingData = {
    name :string
    courseNumber :number
}

function Home(props: ComingData) {
  return (
    <div>
       <div>Welcome {props.name} </div>
       <div>Number of Courses = {props.courseNumber} </div>
    </div>
  )
}

export default Home