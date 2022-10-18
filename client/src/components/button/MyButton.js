import React from 'react'
import Button from 'react-bootstrap/Button'
import './MyButton.css';

const MyButton = ({children, props, type, ...buttonProps}) => {
  return (
    <>
      <Button type={type} style={{width: props}} className="lr-btn" {...buttonProps}>
        {children}
      </Button>
    </>
  )
}

export default MyButton