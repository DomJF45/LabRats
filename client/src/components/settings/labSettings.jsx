import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { reset } from '../../features/auth/authSlice'
import { subjectData } from './subjectData'
import CreateLab from '../lab/CreateLab'
import JoinLab from '../lab/JoinLab'
import Dots from '../loading/dots'
import MyButton from '../button/MyButton'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import { toast } from 'react-toastify'
import GetLab from '../lab/GetLab'

const LabSettings = () => {

  const dispatch = useDispatch();
  const { user, error, success, loading, message } = useSelector((state) => state.auth);

  let name = 'kennesaw';
  let response;

  useEffect(() => {
    console.log(response);
    
  }, [])

  const state = {
    button: 1
  }

  const testLabID = {
    name: 'Brain Lab',
    id: '829ghq662z'
  };

  if (user.role === 'Principle Investigator') {
    toast.update('Hello Admin');
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

  // switch(user.role) {
  //   case 'Principle Investigator':
  //     return (
  //       <div style={{maxWidth: "90%", marginLeft: "auto", marginRight: "auto", display: "grid"}}>
  //         <CreateLab />
  //       </div>
  //     );
  //   case 'Graduate Research Assistant':
  //     return (
  //       <div style={{maxWidth: "90%", marginLeft: "auto", marginRight: "auto", display: "grid"}}>
  //         <JoinLab />
  //       </div>
  //     );
  //   case 'Undergraduate Research Assistant':
  //     return (
  //       <div style={{maxWidth: "90%", marginLeft: "auto", marginRight: "auto", display: "grid"}}>
  //         <JoinLab />
  //       </div>
  //     );
  //   default:
  //     break;
  // }

  return (
    <>
      <div style={{maxWidth: "90%", marginLeft: "auto", marginRight: "auto", display: "block"}}>
        <GetLab />
      </div>      
    </>
  )
}

export default LabSettings