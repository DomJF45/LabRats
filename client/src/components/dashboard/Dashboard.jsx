import React, { useEffect, createContext } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getLab, reset } from '../../features/lab/labSlice';
import { useNavigate } from 'react-router-dom';
import Dots from '../loading/dots';
import Navigation from '../nav/Nav'; 

const Dashboard = () => {

  
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
      { labs.map((lab) => (
        <h1>{lab.labName}</h1>
      ))}
     
      
    </>
  )
}

export default Dashboard;