import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navigation from '../nav/Nav'; 
const Dashboard = () => {

  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // navigate to '/'
      navigate('/')
    }
  }, [user, navigate])

  return (
    <>
      <Navigation userProps={user.name}/>
    </>
  )
}

export default Dashboard;