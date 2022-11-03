import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createProject, getSingleLab, reset } from '../../features/lab/labSlice'
import { useParams } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'
import Modal from 'react-bootstrap/Modal'
import MyButton from '../button/MyButton'
import Form from 'react-bootstrap/Form'
import { randomColor } from '../../util/colors'
import { toast } from 'react-toastify'

const AddProject = (props) => {

  const { labId } = useParams();
  const projectTitleRef = useRef();
  const assignedRef = useRef();

  const dispatch = useDispatch();
  const { error, success, loading, message } = useSelector((state) => state.lab)
  const { user } = useSelector((state) => state.auth);
  const lab = JSON.parse(localStorage.getItem(`lab:${labId}`))


  const onSubmit = (e) => {
    
    e.preventDefault();

    console.log(labId)

    const projectData = {
      projectId: nanoid(),
      labId: labId,
      projectName: projectTitleRef.current.value,
      manager: user.name,
      assignedTo: assignedRef.current.value,
      color: randomColor()
    }
    
    dispatch(createProject(projectData))
    props.onHide();
    dispatch(getSingleLab(labId));
    
  }

  React.useEffect(() => {
    
    if (error) {
      toast.error(message)
    }

    return () => {
      dispatch(reset())
    }

  }, [error, success, loading, message])


  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Add Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id='project-form' onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Project Title:</Form.Label>
            <Form.Control type='text' placeholder='Project Title' className='mb-3' ref={projectTitleRef} />
            
            { lab.users.length > 0 ? (
              <>
                <Form.Label>Assign To: </Form.Label>
                <Form.Select ref={assignedRef}>
                  {lab.users.map((user) => {
                    <option>{user.name}</option>
                  })}
                </Form.Select>
              </>
            ): (
              <>
                <Form.Label>Assigned To: </Form.Label>
                <Form.Select ref={assignedRef}>
                  <option>{user.name}</option>
                </Form.Select>
              </>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <MyButton type='submit' form='project-form'>Submit</MyButton>
        <MyButton onClick={props.onHide}>Close</MyButton>
      </Modal.Footer>
      
    </Modal>
  )
}

export default AddProject