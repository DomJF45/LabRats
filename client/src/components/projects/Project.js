import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getSingleLab, editTask, deleteTask, reset } from '../../features/lab/labSlice';
import { useParams } from 'react-router-dom'
import { projectData } from './testData';
import { randomColor } from '../../util/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPenToSquare, faPlus, faXmark, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import AddTask from './AddTask';
import Navigation from '../nav/Nav';
import '../../styles/Task.css'
import Dots from '../loading/dots';
import Form from "react-bootstrap/Form";


const Project = () => {

  const { projectId } = useParams();
  const { labId } = useParams();
  const { user } = useSelector((state) => state.auth)
  // const lab = JSON.parse(localStorage.getItem(`lab:${labId}`));
  const { lab, lab: {projects}, loading, error, success, message } = useSelector((state) => state.lab)
  const [modalShow, setModalShow] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const dispatch = useDispatch();
  const taskNameRef = useRef();

  // const projectName = lab.projects.find((proj) => {
  //   return proj.projectId === projectId;
  // });

  const handleComplete = (taskData) => {

    console.log(taskData);
    dispatch(editTask(taskData));
    if (success) {
      toast.success('Completed!');
    }
    dispatch(reset());
    dispatch(getSingleLab(labId));
  }

  const tasks = lab.tasks?.filter((task) => {
    return task.projectId === projectId;
  });

  console.log('project.js render');

  useEffect(() => {

    dispatch(getSingleLab(labId))

    return () => {
      dispatch(reset());
    }

  }, [loading])

  if (loading) {
    return(
      <div className='loading-container'>
        <Dots />
      </div>
    )
  }
  
  return (
    <>
      <Navigation props={user} />
      <div className='task-container'>
        <div className='task-c-1'>
          {/* <h1>{project.name}</h1> */}
          <h2>Tasks:</h2>
        </div>
        <div className='task-c-2'>
          { tasks?.length > 0 ? (
            <>
            
            {tasks.map((task, index) => (
              <div className='project-content-container' key={index}>
                <div className='task-card'>
                  <div className='task-card-img' style={{backgroundColor: task.color}}>
                    
                    <h1 className='task-card-title'>{task.taskName}</h1>
                    <div className='task-card-icon'>
                      <FontAwesomeIcon icon={faPenToSquare} size="lg" style={{color: "white"}} onClick={() => {setEditMode(!editMode)}}/>
                    </div>
                    <div className='task-card-icon'>
                      { task.complete ? (<>
                        <FontAwesomeIcon icon={faXmark} size="lg" style={{color: "white"}} onClick={() => handleComplete({
                        labId: labId,
                        projectId: task.projectId,
                        taskId: task.taskId,
                        taskName: task.taskName,
                        inProgress: !task.inProgress,
                        complete: !task.complete,
                        notes: task.notes,
                        color: task.color
                      })} />
                      </>):(<>
                        <FontAwesomeIcon icon={faCheck} size="lg" style={{color: "white"}} onClick={() => handleComplete({
                        labId: labId,
                        projectId: task.projectId,
                        taskId: task.taskId,
                        taskName: task.taskName,
                        inProgress: !task.inProgress,
                        complete: !task.complete,
                        notes: task.notes,
                        color: task.color
                      })} />
                      </>)}
              
                    </div>
                  
                  </div>
                  <div className='task-container-2' >
                    <div className='task-card-bio'>
                      <div className='task-card-info'> 
                        <div className='task-card-notes'>
                          <h4>Notes:</h4>
                          <p>{task.notes}</p>
                        </div>
                        <div className='task-card-assignment'>
                          <h4>Assigned To:</h4>
                          <p className='assigned-to'>{task.assigned}</p>
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
                <div className='task-card-img' style={{backgroundColor: "#ffb703", borderRadius: '10px'}}>
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
                <div className='task-card-img' style={{backgroundColor: "#ffb703", borderRadius: '10px'}}>
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