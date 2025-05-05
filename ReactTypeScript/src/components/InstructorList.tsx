import React from 'react'

type instructureListInfoProps = {
    instructureListInfo :{
        firstName :string,
        lastName: string,
    }[]
}

function InstructorList(props: instructureListInfoProps) {
  return (
    <div>
        <h1>Instructor List</h1>
        {props.instructureListInfo.map(item => {
            return (
                <h3 key={item.firstName}>{item.firstName} {item.lastName}</h3>
            )
        })}
    </div>
  )
}

export default InstructorList