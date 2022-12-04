import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { lab } from '../../features/lab/labSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import './Nav.css';

const Directory = ({ labName, projectId, labId }) => {

  const { lab } = useSelector((state) => state.lab)
  
  const navigate = useNavigate();

  const project = lab.projects.filter(p => {return p.projectId === projectId})
  
  const projectName = project[0]?.projectName;

  return (
    <div className='directory'>
      
      { labName && projectName ? (<>
        <FontAwesomeIcon className='back-icon' icon={faChevronCircleLeft} onClick={() => navigate(`/${labId}`) } />
        <div>{labName} / {projectName} / Tasks / </div>
      </>):(<>
        <FontAwesomeIcon className='back-icon' icon={faChevronCircleLeft} onClick={() => navigate(`/dashboard`)} />
        <div>{labName} / </div>
      </>)}
      
    </div>
  )
}

export default Directory