import React, {useEffect} from 'react'
import { Container, NavDropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import MyButton from '../button/MyButton';
import './Nav.css';
import { Navbar } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../../features/auth/authSlice';

const Navigation = ({props}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {

    try {
      dispatch(logout());
      dispatch(reset());
      navigate('/');

    } catch(error) {
      navigate('/');
    }
  }

  return (
    <>
      <Navbar>
      <Container>
        <Navbar.Brand href='#' onClick={() => {navigate('/dashboard')}}>LabRats</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: { props === null ? '': props.name}
          </Navbar.Text>
          <NavDropdown align="end" className="mx-2">
            <NavDropdown.Item onClick={() => navigate('/user-settings')}>User Info</NavDropdown.Item>
            <NavDropdown.Divider />
            <div style={{justifyContent: "center", alignItems: "center", display: "flex", marginTop: "0"}}>
              <MyButton onClick={handleLogout} style={{width: "initial"}}>Sign Out</MyButton>
            </div>
            
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navigation;
