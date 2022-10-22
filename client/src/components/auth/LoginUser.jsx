import React, {useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../../features/auth/authSlice';
import { useNavigate, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import Form from "react-bootstrap/Form"
import MyButton from '../button/MyButton'
import Dots from '../loading/dots'
import "../../styles/Register.css";

const LoginUser = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();


  const { user, loading, success, error, message} = useSelector((state) => state.auth);
  // useEffect for resest and error message
  useEffect(() => {
    if (error) {
      toast.error(message);
    }
    if (success || user) {
      navigate('/dashboard');
    }
    dispatch(reset());
  }
  ,[user, error, success, message, navigate, dispatch])

  const handleLogin = (e) => {
    e.preventDefault();

    // console.log({
    //   email: emailRef.current.value,
    //   password: passwordRef.current.value
    // })

    const userData = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }

    dispatch(login(userData))
    // dispatch(getLab(user.token));
    

  }

  

  return (
    <>
    
    <div className='register-container'>
      
      <div>
        <h1>Log In</h1>
        <div className={loading ? 'loading-on' : 'loading-off'}>
          <Dots />
        </div>
      </div>
      <div className='form-group'>
      <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" >
            <Form.Label>Email:</Form.Label>
            <Form.Control 
              type='email' placeholder='example@example.com'
              ref={emailRef}
              className="mb-3"
             
            />
            <Form.Label>Password:</Form.Label>
            <Form.Control 
              type="password" 
              placeholder='Password'
              ref={passwordRef}
              className="mb-3" 
            ></Form.Control>
          </Form.Group>
          <MyButton props={"100%"} onClick={() => this.submit()}>Register</MyButton>
        </Form>
        <div style={{padding: "1.5rem 0", display: "flex", justifyContent: "center"}}>
          <div style={{paddingRight: ".5rem"}}>

            <p style={{textAlign: "center"}}>Don't have an account? </p>
          </div>
          <NavLink 
            to="/register"
            style={isActive => ({
              color: isActive ? "#FFB703" : "blue",
              textDecoration: "none"
            })}
          
          >Sign Up</NavLink>
        </div>
      </div>
    </div>
    </>
  )
}

export default LoginUser;