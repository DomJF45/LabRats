import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getLab, reset } from '../../features/lab/labSlice';
import { useNavigate } from 'react-router-dom';
import MyButton from '../button/MyButton';
import CreateLab from './CreateLab';
import JoinLab from './JoinLab';
import { toast } from 'react-toastify';

const GetLab = () => {

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { labs, error, success, message, } = useSelector((state) => state.lab);
  const [createLab, setCreateLab] = useState('')
  const [joinLab, setJoinLab] = useState('');
  const [isShowing, setIsShowing] = useState(false);
  

  const showLab = () => {
    setCreateLab(<CreateLab />);
    setIsShowing(true);
  }

  const hideLab = () => {
    setCreateLab(<></>)
  }

  const showJoinLab = () => {
    setJoinLab(<JoinLab />)
    setIsShowing(true);
  }

  useEffect(() => {

    if (error) {
      console.log(message);
    }

    if (!user) {
      // navigate to '/'

      navigate('/')
    }
    
    if (user) {

      dispatch(getLab())
    }
    
    return () => {
      dispatch(reset());

    }

  }, [user, navigate, error, message, dispatch])

  console.log(labs.labName)
  switch (user.role) {
    case 'Principle Investigator':
      return(
        <>
          <div className="list-labs">
            {labs.map((lab) => (
              <div className='lab-grid-item'>
                <h3>{lab.labName} </h3>
                <h5 style={{marginRight:"1rem"}}>Institution:</h5>
                <p>{lab.institution}</p>
                <h5 style={{marginRight:"1rem"}}>Admin:</h5>
                <p>{lab.admin?.map((ad) => {
                  return ad.adminName
                })}</p>
                <h5 style={{marginRight:"1rem"}}>ID:</h5>
                <p>{lab.labId}</p>
              </div>
            ))}
          </div>
          <div className='my-btn-group'>
            {createLab}
            <MyButton style={isShowing ? {display: "none"} : {}} onClick={showLab}>Create Lab</MyButton>
          </div>
        </>
      );
    case 'Graduate Research Assistant':
      return (
        <>
          <div className="list-labs">
            {labs.map((lab) => (
              <div className='lab-grid-item'>
                <h3>{lab.labName} </h3>
                <h5 style={{marginRight:"1rem"}}>Institution:</h5>
                <p>{lab.institution}</p>
                <h5 style={{marginRight:"1rem"}}>Admin:</h5>
                <p>{lab.admin?.map((ad) => {
                  return ad.adminName
                })}</p>
                <h5 style={{marginRight:"1rem"}}>ID:</h5>
                <p>{lab.labId}</p>
              </div>
            ))}
          </div>
          <div className='my-btn-group'>
            {joinLab}
            <MyButton style={isShowing ? {display: "none"}: {}} onClick={showJoinLab}>Join Lab</MyButton>
          </div>
        </>
      )
    case 'Undergraduate Research Assistant':
      return (
        <>
          <div className="list-labs">
            {labs.map((lab) => (
              <div className='lab-grid-item'>
                <h3>{lab.labName} </h3>
                <h5 style={{marginRight:"1rem"}}>Institution:</h5>
                <p>{lab.institution}</p>
                <h5 style={{marginRight:"1rem"}}>Admin:</h5>
                <p>{lab.admin?.map((ad) => {
                  return ad.adminName
                })}</p>
                <h5 style={{marginRight:"1rem"}}>ID:</h5>
                <p>{lab.labId}</p>
              </div>
            ))}
          </div>
          <div className='my-btn-group'>
            {joinLab}
            <MyButton style={isShowing ? {display: "none"}: {}} onClick={showJoinLab}>Join Lab</MyButton>
          </div>
        </>
      )
    default:
      break;
  }

  return (
    <>
      <h1>Lab not Found</h1>
      <div my-btn-group>
        <MyButton onClick={() => {return (<JoinLab />)}}>Join Lab</MyButton>
      </div>
  
    </>
  )
}

export default GetLab