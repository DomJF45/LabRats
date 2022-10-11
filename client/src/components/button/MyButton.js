import React from 'react'
import Button from 'react-bootstrap/Button'
import './MyButton.css';

const MyButton = ({children}) => {
  return (
    <>
      <Button className="lr-btn">
        {children}
      </Button>
    </>
  )
}

export default MyButton