import React from 'react'
import './dots.css';

function Dots() {
  return (
    <div style={{display: "flex", justifyContent: "center", maxHeight: "60vh"}}>

      <div className="snippet" data-title=".dot-windmill">
        <div className="stage">
          <div className="dot-windmill"></div>
        </div>
      </div>
    </div>
  )
}

export default Dots