import React, { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getLab, registerLab, reset } from '../../features/lab/labSlice';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { subjectData } from '../settings/subjectData'
import CreateLab from './CreateLab'
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import MyButton from '../button/MyButton'
import { randomColor } from '../../util/colors';

export const ModalAddLab = (props) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { lab, error, success, loading, message } = useSelector((state) => state.lab);
  const { user } = useSelector((state) => state.auth)
  const labNameRef = useRef();
  const instituteRef = useRef();
  const fieldRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();



  const onSubmit = (e) => {
    e.preventDefault();
    

    if (passwordRef.current.value !== confirmPassRef.current.value) {
      toast.error('Passwords do not match');
    }

    const labData = {
      labName: labNameRef.current.value,
      labId: nanoid(),
      password: passwordRef.current.value,
      admin: user.name,
      institution: instituteRef.current.value,
      fieldOfStudy: fieldRef.current.value,
      color: randomColor()
    }
    props.create(labData);
    // dispatch(registerLab(labData, user.token))
    // console.log({
    //   labName: labNameRef.current.value,
    //   insitute: instituteRef.current.value,
    //   field: fieldRef.current.value,
    //   password: passwordRef.current.value,
    //   confirm: confirmPassRef.current.value
    // })
    
    dispatch(getLab());
    props.onHide();
    
  }

  useEffect(() => {
    if (error) {
      toast.error(message)
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
        <Modal.Title id='contained-modal-title-vcenter'>Add Lab</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form id='lab-form' onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Lab Name: </Form.Label>
        
            <Form.Control 
              type="text" 
              className='mb-3'
              ref={labNameRef}
            />
            <Form.Label>Institution:</Form.Label>
            <Form.Control 
              type="text" 
              className='mb-3' 
              ref={instituteRef}
            />
            <Form.Label>Field of Study:</Form.Label>
            <Form.Select
              className='mb-3'
              ref={fieldRef}
            >
              {subjectData.map((subject, index) => (
                  <option key={{index}}>{subject.name}</option>
              ))}
            </Form.Select>
            <Form.Label>Lab Password:</Form.Label>
            <Form.Control 
              type='password' 
              className='mb-3'
              ref={passwordRef}
            />
            <Form.Label>Confirm Password: </Form.Label>
            <Form.Control 
              type='password' 
              className='mb-3'
              ref={confirmPassRef}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <MyButton type='submit' form='lab-form'>Submit</MyButton>
        <MyButton onClick={props.onHide}>Close</MyButton>
      </Modal.Footer>
    </Modal>
  )
}
