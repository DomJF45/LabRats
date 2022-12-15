import React, { useEffect, createContext, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getLab, joinLab, registerLab, reset } from '../../features/lab/labSlice';
import { logout } from '../../features/auth/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import { randomColor } from '../../util/colors';
import Lab from '../lab/Lab';
import Dots from '../loading/dots';
import Navigation from '../nav/Nav'; 
import './Dashboard.css';
import { toast } from 'react-toastify';
import labPicture from '../../img/labPicture.svg'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { ModalAddLab } from '../lab/ModalAddLab';
import { ModalJoinLab } from '../lab/ModalJoinLab';
import NewNav from '../nav/NewNav';

const Dashboard = () => {

  const [color, setColor] = useState('');
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { labs, loading, error, success, message } = useSelector((state) => state.lab)
  const [modalShow, setModalShow] = useState(false);



  const navigate = useNavigate();

  const handleCreate = (labData) => {
    dispatch(registerLab(labData, user.token));
    if (success) {
      toast.success('Lab Created!');
      dispatch(getLab());
      setModalShow(false);
    } else if (error) {
      toast.error(message);
    }
  }

  const handleJoin = (labData) => {

    dispatch(joinLab(labData));

    if (success) {
      toast.success('Lab Joined!');
      dispatch(getLab());
      setModalShow(false);
    } else if (error) {
      toast.error(message);
    }
  }

  const labForm = user?.role === 'Principle Investigator' ? <ModalAddLab show={modalShow} onHide = {() => setModalShow(false)} create={handleCreate} /> : <ModalJoinLab show={modalShow} onHide = {() => setModalShow(false)} join={handleJoin} />
  console.log('dashboard rendering')

  useEffect(() => {

    if (!user) {
      navigate('/');
    } else if (user) {
      dispatch(getLab());

      labs.forEach((lab) => {
        localStorage.removeItem(`lab:${lab.labId}`);
      })

      return () => {
        dispatch(reset());
        
      }
    }

    

  }, [user, labs.labId])

  if(loading) {
    return (
      <div className='loading-container'>
        <Dots />
      </div>
    )
  }

  return (
    <>
      {/* <Navigation props={user} /> */}
      <NewNav />
      <div className='dashboard-container'>
        <div className='l-c-1'>
          <h2>Current Labs:</h2>
          <div className='grid-item'>
            <object data={labPicture} type="image/svg+xml" />
          </div>
        </div>
        <div className='l-c-2'>

        { labs.map((lab, index) => (
          <div key={index} className="DcontentContainer">
            <div className="Dcard">
              <Link to={`/${lab.labId}`} style={{textDecoration:"none"}}>
                <div className="DcardImg" style={{backgroundColor: lab.color}}></div>
                  <div className="Dcontainer">
                    <h4 className='DcardTitle'>{lab.labName}</h4>
                    <p className='DcardBio'>ID: {lab.labId}</p>
                    <p className='DcardBio'>{lab.institution}</p>
                  </div>
              </Link>    
            </div>
          </div>
          
          ))}
          <div className='task-card' style={{width: "100%"}}>
            <div className='task-card-img' style={{backgroundColor: "#ffb703", borderRadius: '10px'}}>
              <h1 className='task-card-title'>{user?.role === 'Principle Investigator' ? 'Create a Lab' : 'Join a Lab'}</h1>
              <div className='task-card-icon' onClick={() => {setModalShow(true)}}>
                <FontAwesomeIcon icon={faPlus} size="lg" style={{color: "white"}} />
              </div>
            </div>
          </div>
        </div>

        </div>
        {labForm}
      
    </>
  )
}

export default Dashboard;