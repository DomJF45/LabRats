import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getSingleLab, editTask, deleteTask, reset } from '../../features/lab/labSlice';
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPenToSquare, faPlus, faXmark, faTrash } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import AddTask from './AddTask';
import Navigation from '../nav/Nav';
import '../../styles/Task.css'
import Dots from '../loading/dots';
import Task from './Task'
import MyButton from '../button/MyButton';

const Project = () => {

  const { projectId } = useParams();
  const { labId } = useParams();
  const { user } = useSelector((state) => state.auth)
  // const lab = JSON.parse(localStorage.getItem(`lab:${labId}`));
  const { lab, loading, error, success, message } = useSelector((state) => state.lab)
  const [modalShow, setModalShow] = useState(false)
  const [filterView, setFilterView] = useState('all');
  const dispatch = useDispatch();
  const taskNameRef = useRef();

  const tasks = lab.tasks?.filter((task) => {

    if (filterView === 'all') {
      return task.projectId === projectId;
    } else if (filterView === 'complete') {
      return task.projectId === projectId && task.complete;
    } else if (filterView === 'incomplete') {
      return task.projectId === projectId && !task.complete;
    }

  });

  console.log('project.js render');

  useEffect(() => {

    // dispatch(getSingleLab(labId))
    dispatch(getSingleLab(labId))

    return () => {
      dispatch(reset());
    }

  }, [filterView])

  
  
  return (
    <>
      <Navigation props={user} />
      
      <div className='task-container'>
      
        <div className='task-c-1'>
          {/* <h1>{project.name}</h1> */}
          <h2>Tasks:</h2>
          <p>Filter By: </p>
          <Form>
            <Form.Group>
              <Form.Select style={{marginLeft: "1rem"}} input='select' onChange={(e) => {setFilterView(e.target.value)}}>
                <option value='all'>all</option>
                <option value='incomplete'>incomplete</option>
                <option value='complete'>complete</option>
              </Form.Select>
            </Form.Group>
          </Form>
          
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