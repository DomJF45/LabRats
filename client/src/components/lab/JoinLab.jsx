import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { labs, success, error, message, loading } from '../../features/lab/labSlice';
import { getLab, joinLab, reset } from '../../features/lab/labSlice';
import { subjectData } from '../settings/subjectData'
import Dots from '../loading/dots'
import MyButton from '../button/MyButton'
import Form from 'react-bootstrap/Form'
import { toast } from 'react-toastify';

const JoinLab = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const {error, success, loading, message } = useSelector((state) => state.lab);

  const idRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    if (error) {
      toast.error(message);
    }
    
  }, [user, error, message, success, loading])

  


  const state = {
    button: 1
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (state.button === 1) {
      const labData = {
        labId: idRef.current.value,
        password: passwordRef.current.value
      }
      dispatch(joinLab(labData));
      dispatch(reset());
      dispatch(getLab());
      if (error) {
        toast.error(message)
      }
    }
    // if (success) {
    //   toast.success('Joined Lab!');
    // }
    
  }

  return (
    <>
          <div style={{display: "block", marginTop: "2rem"}}>
            <h3>Join Lab</h3>
          </div>
          <div className='info-container' style={{marginBottom: "2rem"}}>
            <div className="about-container">
              <Form onSubmit={onSubmit} id='form-id'>
                <Form.Group>
                  <Form.Label>ID:</Form.Label>
                  <Form.Control 
                    className='mb-3' 
                    type='text'
                    placeholder={'id'}
                    ref={idRef}
                  ></Form.Control>
                  <Form.Label>Lab Password</Form.Label>
                  <Form.Control type="password" placeholder="lab password" ref={passwordRef} />
                </Form.Group>
                <div className="my-btn-group">

                  <MyButton 
                    style={{maxWidth: "10rem", float: "left"}}
                    className='submit-btn'
                    type="submit"
                    form='form-id'
                    onClick={() => (state.button = 1)}
                  >Submit</MyButton>
                  <MyButton 
                    style={{maxWidth: "10rem", float: "left", marginLeft: "1rem"}} 
                    className='cancel-btn'
                    type="submit"
                    onClick={() => (state.button = 2)}
                  >
                    Cancel
                  </MyButton>
                  {loading ? (<>
                    <div className='dots-container'>
                    <Dots />
                  </div>
                  </>):(<>
                  </>)}
                </div>
              </Form>
            </div>
          </div>
        </>
  )
}

export default JoinLab