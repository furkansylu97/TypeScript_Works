import React from 'react'

type instructureListInfoProps = {
    instructureListInfo :{
        firstName :string,
        lastName: string,
    }[]
}

function InstructorList(props: instructureListInfoProps) {
  return (
    <div>InstructorList</div>
  )
}

export default InstructorList