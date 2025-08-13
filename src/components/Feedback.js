import React from 'react'

export default function Feedback() {
    let count = 0;
    const counter = () =>{
        count++;
    }
  return (
    <div>
      <span>Please share your feedback of this application</span>
      <button onClick={counter}>Like {count++}</button>
      <button>Dislike</button>
    </div>
  )
}
