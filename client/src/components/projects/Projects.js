import React, { useState, useEffect } from 'react'
import { projectData } from './testData'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getProjects, getSingleLab, deleteProject, reset } from '../../features/lab/labSlice'
import { randomColor } from '../../util/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import Navigation from '../nav/Nav'
import '../../styles/Projects.css';
import AddProject from './AddProject'
import Lab from '../lab/Lab'

const Projects = () => {

  const { labId } = useParams();
  const dispatch = useDispatch();
  const [color, setColor] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const { lab } = useSelector((state) => state.lab);

  const handleDelete = (projectData) => {
    dispatch(deleteProject(projectData));
    dispatch(reset());
    dispatch(getSingleLab(labId));
  }

  useEffect(() => {
    
    dispatch(getSingleLab(labId))
    
    return () => {
      dispatch(reset());
    }

  }, []);

  return (
    <div className='project-container'>
      <div className='c-1'>
        <h2>Current Projects:</h2>
      </div>
      <div className='c-2'>
        {lab.projects.map((project) => (
          <div className='project-content-container'>
            <div className='project-card'>
              <div className='project-card-img' style={{backgroundColor: project.color}}>
                <Link to={`projects/${project.projectId}`} style={{textDecoration: 'none'}}>
                  <h1 className='project-card-title'>{project.projectName}</h1>
                </Link>
                <div className='project-card-icon'>
                  <FontAwesomeIcon icon={faTrash} size="lg" style={{color: "white"}} onClick={() => handleDelete({labId, projectId: project.projectId})} />
                </div>
              </div>
              <div className='project-container-2'>
                <p className='project-card-bio'>Posted By: {project.manager}</p>
              </div>
            </div>
          </div>
        ))}
        <div className='add-project-container'>
          <div className='task-card'>
            <div className='task-card-img' style={{backgroundColor: "#ffb703", borderRadius: "10px"}}>
              <h1 className='task-card-title'>Add a Project</h1>
              <div className='task-card-icon' onClick={() => {setModalShow(true)}}>
                <FontAwesomeIcon icon={faPlus} size='lg' style={{color:'white'}} />
              </div>
            </div>
          </div>
            
        </div>
      </div>
      <AddProject show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  )
}

export default Projects