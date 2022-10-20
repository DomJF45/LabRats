import React, { useEffect, createContext } from 'react'
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
      <Navigation props={user} />
      <div>
        <h2>Projects will appear here</h2>
      </div>
    </>
  )
}

export default Dashboard;