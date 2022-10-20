import React, { useEffect } from 'react'
import { subjectData } from '../settings/subjectData'
import Dots from '../loading/dots'
import MyButton from '../button/MyButton'
import Form from 'react-bootstrap/Form'
import { toast } from 'react-toastify'

const CreateLab = () => {

  const state = {
    button: 1
  }

  

  return (
    <>
    <h3>Create a Lab</h3>
    <div>
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Lab Name: </Form.Label>
            <Form.Control type="text" className='mb-3' />
            <Form.Label>Institution:</Form.Label>
            <Form.Control type="text" className='mb-3' />
            <Form.Label>Field of Study:</Form.Label>
            <Form.Select
              className='mb-3'
              // define subjectRef here
            >
              {subjectData.map((subject) => (
                  <option>{subject.name}</option>
              ))}
            </Form.Select>
          </Form.Group>
          <div className='my-btn-group'>
          <MyButton 
              style={{maxWidth: "10rem", float: "left"}}
              className='submit-btn'
              type="submit"
              onClick={() => (state.button = 1)}
            >Save Changes</MyButton>
            <MyButton 
              style={{maxWidth: "10rem", float: "left", marginLeft: "1rem"}} 
              className='cancel-btn'
              type="submit"
              onClick={() => (state.button = 2)}
            >Cancel</MyButton>
          </div>
        </Form>
      </div>
    </div>
    
  </>
  )
}

export default CreateLab