import React, { useState, useEffect } from 'react'
import { projectData } from './testData'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { randomColor } from '../../util/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import Navigation from '../nav/Nav'
import '../../styles/Projects.css';
import AddProject from './AddProject'

const Projects = () => {

  const [color, setColor] = useState('');
  const [modalShow, setModalShow] = useState(false)
 

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
              <Link to={`projects/${project.id}`} style={{textDecoration: 'none'}}>
                <div className='project-card-img' style={{backgroundColor: project.color}}></div>
                  <div className='project-container-2'>
                    <h1 className='project-card-title'>{project.name}</h1>
                    <p className='project-card-bio'>{project.assignedTo}</p>
                  </div>
              </Link>
            </div>
          </div>
        ))}
        <div className='add-project-container'>
          <div className='project-card' onClick={() => setModalShow(true)}>
          

          <FontAwesomeIcon icon={faPlusSquare} className='add-project-icon'/>
          <h4 className='add-project-label'>Add Project</h4>
          </div>
            
        </div>
      </div>
      <AddProject show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  )
}

export default Projects