import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { labs, success, error, message, loading } from '../../features/lab/labSlice';
import { joinLab, getLab, reset } from '../../features/lab/labSlice';
import { toast } from 'react-toastify';
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
import Dots from '../loading/dots'
import MyButton from '../button/MyButton'

export const ModalJoinLab = (props) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const {error, success, loading, message } = useSelector((state) => state.lab);

  const idRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    const labData = {
      labId: idRef.current.value,
      password: passwordRef.current.value
    }
    
    props.joinLab(labData);
    dispatch(getLab());
    props.onHide();
    
  }

  useEffect(() => {
    if (error) {
      toast.error(message);
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
        <Modal.Title id='contained-modal-title-vcenter'>Join Lab</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="lab-form" onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>ID:</Form.Label>
            <Form.Control 
              className='mb-3' 
              type='text'
              placeholder={'id'}
              ref={idRef}
            ></Form.Control>
            <Form.Label>Lab Password</Form.Label>
            <Form.Control type="password" placeholder="lab password" ref={passwordRef} />
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
