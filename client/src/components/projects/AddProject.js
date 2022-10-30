import React from 'react'
import Modal from 'react-bootstrap/Modal'
import MyButton from '../button/MyButton'

const AddProject = (props) => {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>Bio here blablabla</p>
      </Modal.Body>
      <Modal.Footer>
        <MyButton onClick={props.onHide}>Close</MyButton>
      </Modal.Footer>
      
    </Modal>
  )
}

export default AddProject