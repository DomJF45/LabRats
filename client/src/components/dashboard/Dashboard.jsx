import React, { useEffect, createContext, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getLab, reset } from '../../features/lab/labSlice';
import { logout } from '../../features/auth/authSlice';
import { useNavigate, Link } from 'react-router-dom';
import { randomColor } from '../../util/colors';
import Lab from '../lab/Lab';
import Dots from '../loading/dots';
import Navigation from '../nav/Nav'; 
import './Dashboard.css';
import { toast } from 'react-toastify';


const Dashboard = () => {

  const [color, setColor] = useState('');
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { labs, loading, error, success, message } = useSelector((state) => state.lab)


  const navigate = useNavigate();

  useEffect(() => {

    if (error) {
      console.log(message);
      /* 
      ===== for testing purposes PLEASE DELETE LATER =====
      
      dispatch(logout());
      navigate('/');
      
      ==================================================== 
      */
      
      dispatch(getLab()).then((response) => {
        
      }).catch((error)=> {
        console.log(error);
        toast.error('Trouble getting data, returning to landing page')
        dispatch(logout());
        navigate('/login')
      })
    }

    if (!user) {
      dispatch(logout());
      navigate('/login');
    }

    dispatch(reset());

    if (!user) {
      // navigate to '/'

      navigate('/')
    }
    
    setColor(randomColor());

    dispatch(getLab());
    console.log('infinite loop at Dashboard.jsx')

    return () => {
      dispatch(reset());
      
    }

  }, [user, navigate, message])

  if(loading) {
    return (
      <div className='loading-container'>
        <Dots />
      </div>
    )
  }

  return (
    <>
      <Navigation props={user} />
      <div className='dashboard-container'>
        <div className='l-c-1'>
          <h2>Current Labs:</h2>
        </div>
        <div className='l-c-2'>

        { labs.map((lab) => (
          <div className="DcontentContainer">
              <div className="Dcard">
                <Link to={`/${lab.labId}`} style={{textDecoration:"none"}}>
                  <div className="DcardImg" style={{backgroundColor: color}}></div>
                    <div className="Dcontainer">
                      <h4 className='DcardTitle'>{lab.labName}</h4>
                      <p className='DcardBio'>{lab.institution}</p>
                    </div>  
                </Link>    
              </div>
            </div>
          
          ))}
        </div>
        </div>
     
      
    </>
  )
}

export default Dashboard;