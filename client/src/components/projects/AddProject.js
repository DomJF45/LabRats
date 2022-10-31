import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getSingleLab, reset } from '../../features/lab/labSlice'
import { useParams } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
import MyButton from '../button/MyButton'
import Form from 'react-bootstrap/Form'

const AddProject = (props) => {

  const {labId} = useParams();
  const projectTitleRef = useRef();
  const projectOwnerRef = useRef();

  const dispatch = useDispatch();
  // const { lab } = useSelector((state) => state.lab)
  const lab = JSON.parse(localStorage.getItem(`lab:${labId}`))
  const onSubmit = (e) => {
    e.preventDefault();
    const projectData = {
      title: projectTitleRef.current.value,
      owner: projectOwnerRef.current.value
    }
    
    
  }

  React.useEffect(() => {
    
    dispatch(getSingleLab(labId))

    return () => {
      dispatch(reset())
    }
  }, [dispatch])


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
            <Form.Label>Manager</Form.Label>
            <Form.Select className='mb-3' ref={projectOwnerRef}>
              {lab.users.map((user) => (
                <option>{user.name}</option>
              ))}
              {/* Get users from lab, map through*/}
            </Form.Select>
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