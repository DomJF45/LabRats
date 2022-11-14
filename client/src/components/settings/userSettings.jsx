import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { update, reset } from '../../features/auth/authSlice';
import { toast } from 'react-toastify';
import Navigation from '../nav/Nav';
import Dots from '../loading/dots';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'
import '../../styles/UserSettings.css';
import MyButton from '../button/MyButton';

const UserSettings = () => {

  const dispatch = useDispatch();
  const { user, loading, success, error, message } = useSelector((state) => state.auth);
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
        role: roleRef.current.value,
        token: user.token
        
      }
      dispatch(update(userData));
    }
  }
  
  useEffect(() => {

    if (error) {
      toast.error(message)
    }


  },[user, loading, success, error, message, dispatch])
  

  return (
    <>
      <div className='user-settings-container' style={{maxWidth: "90%", marginLeft: "auto", marginRight: "auto"}}>
        <h3>{user.name}</h3>
        <div className='info-container'>
          <div className="about-container">
            <div className='about-info'>
              <h5>Name: </h5>
              <p>{user.name}</p>
            </div>
            <div className='about-info'>
              <h5>Role: </h5>
              <p>{user.role}</p>
            </div>
            <div className='about-info'>
              <h5>Email: </h5>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default UserSettings