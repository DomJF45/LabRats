import React from 'react'
import Button from 'react-bootstrap/Button'
import './MyButton.css';

const MyButton = ({children, props, type}) => {
  return (
    <>
      <Button type={type} style={{width: props}} className="lr-btn">
        {children}
      </Button>
    </>
  )
}

export default MyButton