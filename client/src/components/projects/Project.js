import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getSingleLab, editTask, deleteTask, reset } from '../../features/lab/labSlice';
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPenToSquare, faPlus, faXmark, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import AddTask from './AddTask';
import Navigation from '../nav/Nav';
import '../../styles/Task.css'
import Dots from '../loading/dots';
import Task from './Task'

const Project = () => {

  const { projectId } = useParams();
  const { labId } = useParams();
  const { user } = useSelector((state) => state.auth)
  // const lab = JSON.parse(localStorage.getItem(`lab:${labId}`));
  const { lab, loading, error, success, message } = useSelector((state) => state.lab)
  const [modalShow, setModalShow] = useState(false)
  const dispatch = useDispatch();
  const taskNameRef = useRef();

  const tasks = lab.tasks?.filter((task) => {
    return task.projectId === projectId;
  });

  console.log('project.js render');

  useEffect(() => {

    // dispatch(getSingleLab(labId))
    dispatch(getSingleLab(labId))

    return () => {
      dispatch(reset());
    }

  }, [])

  
  
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
              
              <Task task={task} key={index} />
               
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
      <AddTask show={modalShow} onHide={() => {setModalShow(false)}} labProp={lab} />
      
    </>
  )
}

export default Project