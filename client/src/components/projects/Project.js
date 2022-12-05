import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getSingleLab, addTask, editTask, deleteTask, reset } from '../../features/lab/labSlice';
import { useParams, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPenToSquare, faPlus, faXmark, faTrash, faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import AddTask from './AddTask';
import Navigation from '../nav/Nav';
import '../../styles/Task.css'
import Dots from '../loading/dots';
import Task from './Task'
import MyButton from '../button/MyButton';
import Directory from '../nav/Directory';
import { toast } from 'react-toastify';

const Project = () => {

  const { projectId } = useParams();
  const { labId } = useParams();
  const { user } = useSelector((state) => state.auth)
  // const lab = JSON.parse(localStorage.getItem(`lab:${labId}`));
  const { lab, loading, error, success, message } = useSelector((state) => state.lab)
  const [modalShow, setModalShow] = useState(false)
  const [projectName, setProjectName] = useState();
  const [filterView, setFilterView] = useState('all');
  const dispatch = useDispatch();
  const taskNameRef = useRef();
  const navigate = useNavigate();

  const tasks = lab.tasks?.filter((task) => {

    if (filterView === 'all') {
      return task.projectId === projectId;
    } else if (filterView === 'complete') {
      return task.projectId === projectId && task.complete;
    } else if (filterView === 'incomplete') {
      return task.projectId === projectId && !task.complete;
    }

  });

  const handleCreate = (taskData) => {

    dispatch(addTask(taskData));
    
    if (success) {
      toast.success('Task Created!')
      dispatch(getSingleLab(labId));
      setModalShow(false);
    } else if (error) {
      toast.error(message);
    }
  }

  console.log('project.js render');

  useEffect(() => {

    dispatch(getSingleLab(labId))

  }, [filterView])

  
  const { labName } = lab;
  
  return (
    <>
      <Navigation props={user} />
      
      <div className='task-container'>
      
        <div className='task-c-1'>
          {/* <h1>{project.name}</h1> */}
          {/* <FontAwesomeIcon className="back-icon" icon={faChevronCircleLeft} onClick={() => navigate(`/${labId}`)} />
          <h2>Tasks:</h2> */}
          <div className='directory-container'>
            <Directory labName={labName} projectId={projectId} labId={labId} />
          </div>
          <div className='filter-container'>
            <p>Filter By: </p>
            <Form>
              <Form.Group>
                <Form.Select style={{marginLeft: "1rem"}} size='sm' input='select' onChange={(e) => {setFilterView(e.target.value)}}>
                  <option value='all'>all</option>
                  <option value='incomplete'>incomplete</option>
                  <option value='complete'>complete</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </div>
          
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
      <AddTask show={modalShow} onHide={() => {setModalShow(false)}} labProp={lab} create={handleCreate} />
      
    </>
  )
}

export default Project