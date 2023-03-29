import React from 'react'

const Dial = (props) => {
  return (
    <div style={{border:'2px solid yellow',margin:'20px'}}>
        <h3>This is Dial component</h3>
        <h2>Your Steps Count:{props.steps}</h2>
    </div>
  )
}

export default Dial