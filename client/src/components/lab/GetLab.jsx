import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import MyButton from '../button/MyButton';
import CreateLab from './CreateLab';
import JoinLab from './JoinLab';

const GetLab = () => {

  const { user } = useSelector((state) => state.auth);
  const [createLab, setCreateLab] = useState('')
  const [isShowing, setIsShowing] = useState(false);
  

  const testLabID = {
    name: 'Brain Lab',
    institution: 'Kennesaw State University',
    fieldOfStudy: 'SOCIAL SCIENCES & LAW',
    id: '829ghq662z'
  };

  const showLab = () => {
    setCreateLab(<CreateLab />);
    setIsShowing(true);
  }

  const hideLab = () => {

  }

  switch (user.role) {
    case 'Principle Investigator':
      return(
        <>
          <div style={{display: "block", marginTop: "2rem"}}>
            <h3>Lab Name: {testLabID.name} </h3>
            <div style={{display: "flex"}}>
              <h5>Institution:</h5>
              <p>{testLabID.institution}</p>
              <p></p>
            </div>
          </div> {/* map through multiple labs later */}
          <div className='my-btn-group'>
            {createLab}
            <MyButton style={isShowing ? {display: "none"} : {}} onClick={showLab}>Create Lab</MyButton>
          </div>
        </>
      );
    case 'Graduate Research Assistant':
      return (
        <>
          {testLabID ? (
              <> 
                <div style={{display: "block", marginTop: "2rem"}}>
                  <h3>Lab Name: {testLabID.name} </h3>
                  <p>Hello There</p>
                </div>
                <div my-btn-group>
                  <MyButton onClick={() => {return (<JoinLab />)}}>Join Lab</MyButton>
                </div>
              </>
            ) : (
              <>
                <div my-btn-group>
                  <MyButton onClick={() => {return (<JoinLab />)}}>Join Lab</MyButton>
                </div>
              </>
            )
          }
        </>
      )
    case 'Undergraduate Research Assistant':
      return (
        <>
          {testLabID ? (
              <> 
                <div style={{display: "block", marginTop: "2rem"}}>
                  <h3>Lab Name: {testLabID.name} </h3>
                  <p>Hello There</p>
                </div>
                <div my-btn-group>
                  <MyButton onClick={() => {return (<JoinLab />)}}>Join Lab</MyButton>
                </div>
              </>
            ) : (
              <>
                <div my-btn-group>
                  <MyButton >Join Lab</MyButton>
                </div>
              </>
            )
          }
        </>
      )
    default:
      break;
  }

  return (
    <>
      <JoinLab />
    </>
  )
}

export default GetLab