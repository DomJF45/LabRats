import React, { useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCheck, faXmark, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { Form } from 'react-bootstrap'
import { editTask, deleteTask, reset, getSingleLab } from '../../features/lab/labSlice'
import { toast } from 'react-toastify';
import MyButton from '../button/MyButton'

const Task = ({task}, key) => {

  const [editMode, setEditMode] = useState(false);
  const [nameState, setNameState] = useState(task.taskName);
  const [notesState, setNotesState] = useState(task.notes);
  const [assignedState, setAssignedState] = useState(task.assigned);
  const { labId } = useParams();
  const { projectId } = useParams();
  const dispatch = useDispatch();
  const { error, success, message, loading } = useSelector((state) => state.lab);
  const newNameRef = useRef();
  const newNotesRef = useRef();
  const newAssignRef = useRef();

  const handleComplete = (taskData) => {
    dispatch(editTask(taskData));
    dispatch(reset());
    dispatch(getSingleLab(labId));
  }

  const handleDelete = (taskData) =>{
    dispatch(deleteTask(taskData));
    if (success) {
      toast.success('Successfully Deleted Task!')
    }
    dispatch(reset());
    dispatch(getSingleLab(labId));
  }

  const handleEdit = (e) => {
    e.preventDefault();
    const taskData = {
      labId: labId,
      projectId: task.projectId,
      taskId: task.taskId,
      taskName: nameState,
      notes: notesState,
      assigned: assignedState,
      color: task.color
    }
    dispatch(editTask(taskData));
    dispatch(reset());
    dispatch(getSingleLab(labId));
    setEditMode(false);
  }

  return (
    <Form onSubmit={handleEdit}>
      <Form.Group>
        <div className='project-content-container' key={key}>
          <div className='task-card'>
            <div className='task-card-img' style={{backgroundColor: task.color}}>
              { editMode ? (<Form.Control 
                  type='text' 
                  value={nameState} 
                  className="mx-3 mt-3"
                  ref={newNameRef}
                  onChange={(e) => setNameState(e.target.value)}
                />):(<h1 className='task-card-title' >{task.taskName ? task.taskName : 'No Name for Task'}</h1>) }

              <div className='task-card-icon'>
                <FontAwesomeIcon 
                  icon={faPenToSquare} 
                  size="lg" 
                  style={{color: "white"}} 
                  onClick={() => {setEditMode(!editMode)}}
                  
                />
              </div>
              { task.complete ? (<div className='task-card-icon'>
                <FontAwesomeIcon icon={faTrash} style={{color: "white"}} onClick={() => {handleDelete({labId,projectId: task.projectId, taskId: task.taskId})}}/>
              </div>):(<></>) }
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
                  assigned: task.assigned,
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
                  assigned: task.assigned,
                  color: task.color
                })} />
                </>)}
              </div>
            </div>
            <div className='task-container-2' >
              <div className='task-card-bio'>
                <div className='task-card-info'> 
                  <div className='task-card-notes'>
                    
                    { editMode ? (<>
                      <h4>Notes:</h4>
                      <Form.Control type='text' value={task.notes ? notesState : 'No notes assigned'} className='my-3' ref={newNotesRef} onChange={(e) => setNotesState(e.target.value)} />
                    </>):(<>
                      <h4>Notes:</h4>
                      <p>{task.notes ? task.notes : 'No notes assigned'}</p>
                    </>)}
                  </div>
                  <div className='task-card-assignment' style={editMode ? {display: "block"} : {display:"flex"}}>
                    { editMode ? (<>
                      <h4>Assigned To:</h4>
                      <Form.Control type='text' value={task.assigned ? assignedState : 'No one assigned'}  className='my-3' ref={newAssignRef} onChange={(e) => setAssignedState(e.target.value)} />
                    </>):(<>
                      <h4>Assigned To:</h4>
                      <p className='assigned-to'>{task.assigned ? task.assigned : 'No one assigned...'}</p>
                    </>)}
                  </div>
                  <div className='task-card-footer'>
                    <div className='task-card-status'>
                      <h4>Status:</h4>
                      <div className={task.complete ? 'complete' : 'incomplete'}></div>
                    </div>
                  </div>
                  { editMode ? (<>
                    <MyButton type='submit' style={{width: "100%"}}>Update</MyButton>
                  </>):(<>
                  
                  </>)}
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form.Group>
    </Form>
  )
}

export default Task