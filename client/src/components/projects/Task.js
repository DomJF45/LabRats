import React, { useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCheck, faXmark, faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { Form } from 'react-bootstrap'
import { editTask, reset, getSingleLab } from '../../features/lab/labSlice'
import MyButton from '../button/MyButton'

const Task = ({task}, key) => {

  const [editMode, setEditMode] = useState(false);
  const { labId } = useParams();  
  const dispatch = useDispatch();

  const newNameRef = useRef();
  const newNotesRef = useRef();
  const newAssignRef = useRef();

  const handleComplete = (taskData) => {
    dispatch(editTask(taskData));
    dispatch(reset());
    dispatch(getSingleLab(labId));
  }

  const handleEdit = () => {
    const taskData = {
      taskName: newNameRef.current.value,
      notes: newNotesRef.current.value,
      assigned: newAssignRef.current.value
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
                  placeholder={task.taskName} 
                  className="mx-3 mt-3"
                  ref={newNameRef}
                />):(<h1 className='task-card-title' >{task.taskName}</h1>) }

              <div className='task-card-icon'>
                <FontAwesomeIcon 
                  icon={faPenToSquare} 
                  size="lg" 
                  style={{color: "white"}} 
                  onClick={() => {setEditMode(!editMode)}}
                  
                />
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
                    
                    { editMode ? (<>
                      <h4>Notes:</h4>
                      <Form.Control type='text' placeholder={task.notes ? task.notes : 'No notes assigned'} className='my-3' ref={newNotesRef} />
                    </>):(<>
                      <h4>Notes:</h4>
                      <p>{task.notes ? task.notes : 'No notes assigned'}</p>
                    </>)}
                  </div>
                  <div className='task-card-assignment' style={editMode ? {display: "block"} : {display:"flex"}}>
                    { editMode ? (<>
                      <h4>Assigned To:</h4>
                      <Form.Control type='text' placeholder={task.assigned ? task.assigned : 'No one assigned'}  className='my-3' ref={newAssignRef} />
                    </>):(<>
                      <h4>Assigned To:</h4>
                      <p className='assigned-to'>{task.assigned ? task.assigned : 'No one assigned...'}</p>
                    </>)}
                  </div>
                  <div className='task-card-status'>
                    <h4>Status:</h4>
                    <div className={task.complete ? 'complete' : 'incomplete'}></div>
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