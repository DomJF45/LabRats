import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTask, getSingleLab, reset } from '../../features/lab/labSlice';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import MyButton from '../button/MyButton'
import { useParams } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit';
import { randomColor } from '../../util/colors';
import { toast } from 'react-toastify';
import Dots from '../loading/dots';

const AddTask = (props) => {

  // const [lab, setLab] = useState({});
  const { labId } = useParams();
  const { projectId } = useParams();
  const { project } = useSelector((state) => state.lab);
  const {error, success, loading, message} = useSelector((state) => state.lab)
  // let lab = JSON.parse(localStorage.getItem(`lab:${labId}`));
  const { lab } = useSelector((state) => state.lab);
  const taskNameRef = useRef();
  const notesRef = useRef();
  const assignRef = useRef();
  const dispatch = useDispatch();

 

  const onSubmit = (e) => {
    e.preventDefault();
    
    const taskData = {
      labId: labId,
      projectId: projectId,
      taskId: nanoid(),
      taskName: taskNameRef.current.value,
      notes: notesRef.current.value,
      assigned: assignRef.current.value,
      color: randomColor()
    }

    dispatch(addTask(taskData));
    
    dispatch(getSingleLab(labId));
    props.onHide();
    if (success) {
      toast.success('Task Added!');
    }
    
  }

  useEffect(() => {

    if (error) {
      toast.error(message)
    }

    return () => {
      dispatch(reset());
    }

  }, [])

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
        <Form id='task-form' onSubmit={onSubmit} >
          <Form.Group>
            <Form.Label>Task Name:</Form.Label>
            <Form.Control 
              type='text' 
              className='mb-3'
              ref={taskNameRef}
            />
            <Form.Label>Notes:</Form.Label>
            <Form.Control 
              type="text" 
              className='mb-3' 
              ref={notesRef}
            />
            <Form.Label>Assign To: </Form.Label>
            <Form.Control type="text" className='mb-3' ref={assignRef}/>
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