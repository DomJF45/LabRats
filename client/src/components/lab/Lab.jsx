import React, { useEffect, useState } from 'react'
import { getProjects, getSingleLab, reset } from '../../features/lab/labSlice'; 
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { projectData } from '../projects/testData';
import Projects from '../projects/Projects';
import Navigation from '../nav/Nav';
import Dots from '../loading/dots';
import '../../styles/Lab.css';


const Lab = () => {

  const { labId } = useParams();
  const { lab, error, message, success, loading } = useSelector((state) => state.lab)
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    
    dispatch(getSingleLab(labId));

    console.log('lab.js is rendering')

    return () => {
      dispatch(reset());

    }

  }, [])

  

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