import React from 'react'

type instructureProps = {

    instructureInfo :{
        firstName :string,
        lastName: string,
    }
}

function Instructor(props:instructureProps) {
  return (
    <div>Instructor</div>
  )
}

export default Instructor