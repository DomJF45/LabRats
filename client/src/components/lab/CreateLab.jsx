import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { registerLab, reset } from '../../features/lab/labSlice';
import { subjectData } from '../settings/subjectData'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import Dots from '../loading/dots'
import MyButton from '../button/MyButton'
import Form from 'react-bootstrap/Form'

const CreateLab = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { lab, error, success, loading, message } = useSelector((state) => state.lab);
  const { user } = useSelector((state) => state.auth)
  const labNameRef = useRef();
  const instituteRef = useRef();
  const fieldRef = useRef();
  const passwordRef = useRef();
  const confirmPassRef = useRef();

  const state = {
    button: 1
  }

  useEffect(() => {
    if (error) {
      toast.error(message)
    }
    
  }, [])

  const onSubmit = (e) => {
    e.preventDefault();
    if (state.button === 1) {

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
      }

      dispatch(registerLab(labData, user.token))
      navigate('/user-settings')
      // console.log({
      //   labName: labNameRef.current.value,
      //   insitute: instituteRef.current.value,
      //   field: fieldRef.current.value,
      //   password: passwordRef.current.value,
      //   confirm: confirmPassRef.current.value
      // })
    }
    dispatch(reset());
  }

  const dots = (<Dots />)

  return (
    <>
    <h3>Create a Lab</h3>
    
    <div>
      <div>
        <Form onSubmit={onSubmit} id="form-id">
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
              {subjectData.map((subject) => (
                  <option>{subject.name}</option>
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
          <div className='my-btn-group'>
          <MyButton 
              style={{maxWidth: "10rem", float: "left"}}
              className='submit-btn'
              type="submit"
              onClick={() => (state.button = 1)}
            >Create Lab</MyButton>
            <MyButton 
              style={{maxWidth: "10rem", float: "left", marginLeft: "1rem"}} 
              className='cancel-btn'
              type="submit"
              onClick={() => (state.button = 2)}
            >Cancel</MyButton>
            
          </div>
        </Form>
      </div>
    </div>
    
  </>
  )
}

export default CreateLab