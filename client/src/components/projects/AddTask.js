import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import MyButton from '../button/MyButton'
import { useParams } from 'react-router-dom'

const AddTask = (props) => {

  // const [lab, setLab] = useState({});
  const { labId } = useParams();
  const lab = JSON.parse(localStorage.getItem(`lab:${labId}`))

  console.log(lab)

  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Add Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id='task-form' >
          <Form.Group>
            <Form.Label>Task Name:</Form.Label>
            <Form.Control type='text' className='mb-3'/>
            <Form.Label>Notes:</Form.Label>
            <Form.Control type="text" className='mb-3' />
            <Form.Label>Assign To: </Form.Label>
            <Form.Select className='mb-3'>
              {lab.users.map((user) => (
                <option>{user.name}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <MyButton type='submit' form='task-form'>Submit</MyButton>
        <MyButton onClick={props.onHide}>Close</MyButton>
      </Modal.Footer>
    </Modal>
  )
}

export default AddTask