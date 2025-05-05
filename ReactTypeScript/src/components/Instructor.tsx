import React from 'react'

type instructureProps = {

    instructureInfo :{
        firstName :string,
        lastName: string,
    }
}

function Instructor(props:instructureProps) {
  return (
    <div>
        <div>Instructor Name :</div>
        <div>{props.instructureInfo.firstName} {props.instructureInfo.lastName}</div>
    </div>
  )
}

export default Instructor