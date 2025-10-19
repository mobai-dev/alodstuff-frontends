import React from 'react'

export default function SidelineItem ({ title, type } : {title : string, type : string}) {
  return (
    <>
        <div>{title}</div>
        <div>{type}</div>
    </>
  )
}

// probably need to encode todo lists and texts and possibly more. how?