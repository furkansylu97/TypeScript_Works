import React from 'react'
import { instructureProps } from './propstypes'

function Instructor(props:instructureProps) {
  return (
    <div>
        <div>Instructor Name :</div>
        <div>{props.instructureInfo.firstName} {props.instructureInfo.lastName}</div>
    </div>
  )
}

export default Instructor