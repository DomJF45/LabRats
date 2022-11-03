import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { projectData } from './testData';
import { randomColor } from '../../util/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import AddTask from './AddTask';
import Navigation from '../nav/Nav';
import '../../styles/Task.css'


const Project = () => {

  let { projectId } = useParams();
  let { labId } = useParams();
  const { user } = useSelector((state) => state.auth)
  const lab = JSON.parse(localStorage.getItem(`lab:${labId}`));
  const [modalShow, setModalShow] = useState(false)
  
  const project = lab.projects.find(proj => {
    return proj.projectId === projectId;
  });

  

  return (
    <>
      <Navigation props={user} />
      <div className='task-container'>
        <div className='task-c-1'>
          <h1>{project.name}</h1>
          <h2>Tasks:</h2>
        </div>
        <div className='task-c-2'>
          { project.tasks.length > 0 ? (
            <>
            
            {project.tasks.map((task) => (
              <div className='project-content-container'>
                <div className='task-card'>
                  <div className='task-card-img' style={{backgroundColor: randomColor()}}>
                    <h1 className='task-card-title'>{task.taskName}</h1>
                    <div className='task-card-icon'>
                      <FontAwesomeIcon icon={faPenToSquare} size="lg" style={{color: "white"}}/>
                    </div>
                    <div className='task-card-icon'>
                      <FontAwesomeIcon icon={faCheck} size="lg" style={{color: "white"}}/>
                    </div>
                  
                  </div>
                  <div className='task-container-2' >
                    <div className='task-card-bio'>
                      <div className='task-card-info'> 
                      
                        <div className='task-card-notes'>
                          <h4>Notes:</h4>
                          <p>Hello notes test</p>
                        </div>
                        <div className='task-card-assignment'>
                          <h4>Assigned To:</h4>
                          <p className='assigned-to'>{task.assignedTo}</p>
                        </div>
                        <div className='task-card-status'>
                          <h4>Status:</h4>
                          <div className={task.complete ? 'complete' : 'incomplete'}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className='project-content-container'>
              <div className='task-card'>
                <div className='task-card-img' style={{backgroundColor: randomColor(), borderRadius: '10px'}}>
                      <h1 className='task-card-title'>Add a task</h1>
                      <div className='task-card-icon' onClick={() => {setModalShow(true)}}>
                        <FontAwesomeIcon icon={faPlus} size="lg" style={{color: "white"}}/>
                      </div>
                  </div>
              </div>
            </div>
            </>
          ):(
            <div className='project-content-container'>
              <div className='task-card'>
                <div className='task-card-img' style={{backgroundColor: randomColor(), borderRadius: '10px'}}>
                      <h1 className='task-card-title'>Add a task</h1>
                      <div className='task-card-icon' onClick={() => {setModalShow(true)}}>
                        <FontAwesomeIcon icon={faPlus} size="lg" style={{color: "white"}}/>
                      </div>
                  </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <AddTask show={modalShow} onHide={() => setModalShow(false)} labProp={lab} />
    </>
  )
}

export default Project