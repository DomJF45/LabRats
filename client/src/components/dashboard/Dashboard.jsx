import React, { useEffect, createContext, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getLab, reset } from '../../features/lab/labSlice';
import { useNavigate } from 'react-router-dom';
import Dots from '../loading/dots';
import Navigation from '../nav/Nav'; 
import { randomColor } from '../../util/colors';
import './Dashboard.css';

const Dashboard = () => {

  const [color, setColor] = useState('');
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { labs, loading, error, success, message } = useSelector((state) => state.lab)


  const navigate = useNavigate();

  useEffect(() => {

    if (error) {
      console.log(message);
    }

    if (!user) {
      // navigate to '/'

      navigate('/')
    }
    
    setColor(randomColor());

    dispatch(getLab())
    console.log(labs)
    return () => {
      dispatch(reset());

    }

  }, [user, navigate, error, message, dispatch])

  if(loading) {
    return <Dots />
  }

  return (
    <>
      <Navigation props={user} />
      <div className='dashboard-container'>
        <div>
          <h2>Current Labs:</h2>
        </div>
        { labs.map((lab) => (
            <div className="DcontentContainer">
              <div className="Dcard">
                <a onClick={() => navigate(`labs/${lab.labId}`)}>
                <div className="DcardImg" style={{backgroundColor: color}}></div>
                <div className="Dcontainer">
                  <h4 className='DcardTitle'>{lab.labName}</h4>
                  <p className='DcardBio'>{lab.institution}</p>
                </div>  
                </a>    
              </div>
            </div>
          
          ))}
        </div>
     
      
    </>
  )
}

export default Dashboard;