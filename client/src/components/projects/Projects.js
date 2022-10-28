import React, { useState, useEffect } from 'react'
import { projectData } from './testData'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { randomColor } from '../../util/colors'
import Navigation from '../nav/Nav'
import '../../styles/Projects.css';

const Projects = () => {

  const [color,setColor] = useState('');
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    setColor((prev) => randomColor());
  }, []);

  return (
    <div className='project-container'>
      <div className='c-1'>
        <h2>Current Projects:</h2>
      </div>
      <div className='c-2'>

        {projectData.map((project) => (
          <div className='project-content-container'>
            <div className='project-card'>
              <Link to={`/projects/${project.id}`} style={{textDecoration: 'none'}}>
                <div className='project-card-img' style={{backgroundColor: project.color}}></div>
                  <div className='project-container-2'>
                    <h1 className='project-card-title'>{project.name}</h1>
                    <p className='project-card-bio'>{project.assignedTo}</p>
                  </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects