import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { subjectData } from '../settings/subjectData'
import Dots from '../loading/dots'
import MyButton from '../button/MyButton'
import Form from 'react-bootstrap/Form'

const JoinLab = () => {

  const dispatch = useDispatch();
  const { lab, error, success, loading, message } = useSelector((state) => state.lab);

  let name = 'kennesaw';
  let response;

  useEffect(() => {
    console.log(response);
  }, [])

  


  const state = {
    button: 1
  }

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
          <div style={{display: "block", marginTop: "2rem"}}>
            <h3>Join Lab</h3>
          </div>
          <div className='info-container' style={{marginBottom: "2rem"}}>
            <div className="about-container">
              <Form onSubmit={onSubmit}>
                <Form.Group>
                  <Form.Label>ID:</Form.Label>
                  <Form.Control 
                    className='mb-3' 
                    type='text'
                    placeholder={'id'}
                  ></Form.Control>
                  <Form.Label>Lab Password</Form.Label>
                  <Form.Control type="password" placeholder="lab password" />
                </Form.Group>
                <div className="my-btn-group">

                  <MyButton 
                    style={{maxWidth: "10rem", float: "left"}}
                    className='submit-btn'
                    type="submit"
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