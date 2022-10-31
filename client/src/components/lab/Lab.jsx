import React, { useEffect, useState } from 'react'
import { getSingleLab, reset } from '../../features/lab/labSlice'; 
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { projectData } from '../projects/testData';
import Projects from '../projects/Projects';
import Navigation from '../nav/Nav';
import '../../styles/Lab.css';


const Lab = () => {

  let { labId } = useParams();
  const { lab, error, message, success, loading } = useSelector((state) => state.lab)
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    if (error) {
      toast.error(message);
      console.log(message);
    }

    if (!user) {
      // navigate to '/'

      navigate('/')
    }
    
    // dispatch(getSingleLab(labId))
    const lab = JSON.parse(localStorage.getItem(`lab:${labId}`))
    
    console.log(lab)

    return () => {
      dispatch(reset());

    }

  }, [user, navigate, error, message])


  return (
    <>
      <Navigation props={user} />
      <div className='lab-container'>
        <h1>{lab.labName}</h1>
        <p>{lab.institution}</p>
      </div>
      
      <Projects />
      
    </>
  )
}

export default Lab