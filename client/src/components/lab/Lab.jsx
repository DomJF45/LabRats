import React, { useEffect, useState } from 'react'
import { getLab, reset } from '../../features/lab/labSlice'; 
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Lab = () => {

  const { labs, error, message, success, loading } = useSelector((state) => state.lab)
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {

    if (error) {
      toast.error(message);
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

  return (
    <>
      <h1>{labs.labName}</h1>
    </>
  )
}

export default Lab