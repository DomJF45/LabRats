import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Nav from 'react-bootstrap/nav'
import UserSettings from '../components/settings/userSettings'
import LabSettings from '../components/settings/labSettings';
import GetLab from '../components/lab/GetLab';
import "../styles/UserSettings.css";
import Navigation from '../components/nav/Nav';

const UserSettingsPage = () => {

  const [active, setActive] = useState('user');
  const { user } = useSelector((state) => state.auth)

  return (
    <>
      {/* <UserSettings /> */}
      <Navigation props={user} />
      <div className='settings-header'>
        <h1>Settings</h1>
        <div className='div-divider' />
      </div>
      <div className='settings-container'>
        <div className='nav-settings'>
          <Nav variant='tabs' className="flex-column" defaultActiveKey='user'>
            <Nav.Link 
              eventKey='user' 
              onClick={() => {console.log(setActive('user'))}}>User</Nav.Link>
            <Nav.Link 
              eventKey='lab'
              onClick={() => {console.log(setActive('lab'))}}
            >Lab</Nav.Link>
          </Nav>
        </div>
        <div className='user-settings-container'>
         
            { active === 'user' ? (<UserSettings />) : (<LabSettings />)}
            
        </div>
      </div>
    </>
  )
}

export default UserSettingsPage