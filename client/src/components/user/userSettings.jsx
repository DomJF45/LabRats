import React, { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { update } from '../../features/auth/authSlice';
import Navigation from '../nav/Nav';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'
import '../../styles/UserSettings.css';
import MyButton from '../button/MyButton';

const UserSettings = () => {

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const state = {
    button: 1
  }
  const nameRef = useRef();
  const emailRef = useRef();
  const roleRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    if (state.button === 2) {
      e.target.reset();
    }
    if (state.button === 1) {
      const userData = {
        name: nameRef.current.value,
        role: roleRef.current.value
      }
      dispatch(update(userData));
    }
  }
  

  return (
    <>
      <Navigation props={user} />
      <div className='user-settings-container'>
        <h1>Settings</h1>
        {/* <div className='settings-nav'>
          <Nav variant="tabs" defaultActiveKey='settings'>
            <Nav.Item>
              <Nav.Link id="settings">Settings</Nav.Link>
            </Nav.Item>
          </Nav>
        </div> */}
        <div className='div-divider' />
        <div className='info-container'>
          <div className="about-container">
            <Form onSubmit={onSubmit}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                  className='mb-3' 
                  type='text'
                  ref={nameRef}
                  placeholder={user.name}
                ></Form.Control>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                  className='mb-3' 
                  type='email'
                  ref={emailRef}
                  placeholder={user.email}
                ></Form.Control>
                <Form.Label>Role (current: {user.role})</Form.Label>
                <Form.Select ref={roleRef}>
                  <option>Principle Investigator</option>
                  <option>Graduate Research Assistant</option>
                  <option>Undergraduate Research Assistant</option>
                </Form.Select>
              </Form.Group>
              <div className="my-btn-group">

                <MyButton 
                  style={{maxWidth: "10rem", float: "left"}}
                  className='submit-btn'
                  type="submit"
                  onClick={() => (state.button = 1)}
                >Submit</MyButton>
                <MyButton 
                  style={{maxWidth: "10rem", float: "left", marginLeft: "1rem"}} 
                  className='cancel-btn'
                  type="submit"
                  onClick={() => (state.button = 2)}
                >
                  Cancel
                </MyButton>
              </div>
            </Form>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default UserSettings