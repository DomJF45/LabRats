import React, { useState, useEffect } from 'react'
import { projectData } from './testData'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getProjects, getSingleLab, deleteProject, reset } from '../../features/lab/labSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrash, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify'
import Directory from '../nav/Directory'
import projectPicture from '../../img/projectPicture.svg';
import Navigation from '../nav/Nav'
import '../../styles/Projects.css';
import AddProject from './AddProject'
import Lab from '../lab/Lab'
import Dots from '../loading/dots'

const Projects = () => {

  const { labId } = useParams();
  const dispatch = useDispatch();
  const [color, setColor] = useState('');
  const [modalShow, setModalShow] = useState(false);
  const { lab, loading, error, success, message } = useSelector((state) => state.lab);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleDelete = (projectData) => {
    dispatch(deleteProject(projectData));
    if (success) {
      toast.success('Project Deleted!')
    }
    dispatch(reset());
    dispatch(getSingleLab(labId));
  }

  useEffect(() => {
    dispatch(getSingleLab(labId))
    return () => {
      dispatch(reset());
    }
  }, []);

  if (loading) {
    return (
      <div className='loading-container'>
        <Dots />
      </div>
    )
  }

  return (
    <>
      <Navigation props={user} />
      <div className='task-container'>
        <Directory labName={lab.labName} />
      </div>
      <div className='project-container'>
        <div className='c-1'>
          <h2>Current Projects:</h2>
          <div className='grid-item'>
            <object data={projectPicture} type="image/svg+xml" /> 
          </div>
        </div>
        <div className='c-2'>
          {lab.projects.map((project, index) => (
            <div key={index} className='project-content-container'>
              

              <div className='project-card'>
              
                <div className='project-card-img' style={{backgroundColor: project.color}}>
                  <Link to={`projects/${project.projectId}`} style={{textDecoration: 'none', width: "75%", padding: "1rem"}}>
                    <h1 className='project-card-title'>{project.projectName}</h1>
                  </Link>
                  <div className='project-card-icon'>
                    <FontAwesomeIcon icon={faTrash} size="lg" style={{color: "white", zIndex: "1"}} onClick={() => handleDelete({labId, projectId: project.projectId})} />
                  </div>
                </div>
                <div className='project-container-2'>
                  <p className='project-card-bio'>Posted By: {project.manager}</p>
                </div>
              </div>
            </div>
          ))}
          { user.role === 'Principle Investigator' || user.role === 'Graduate Research Assistant' ? (
          <>
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
          </>):(
          <>
            
          </>
          )}
          { lab.projects?.length === 0 ? (<>
            <h3>No Projects Yet!</h3>
          </>):(<></>)}
        </div>
        <AddProject show={modalShow} onHide={() => setModalShow(false)} />
        
      </div>
    </>
  )
}

export default Projects