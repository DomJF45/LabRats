import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import './Nav.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MyButton from '../button/MyButton';

const NewNav = () => {

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const variants = {
    open: {opacity: 1, x: 0},
    closed: {opacity: 0, x: '100%'}
  }

  const routerHelper = (page) => {
    navigate(page);
    setShow(false);
  }

  return (
    <>
      <motion.nav 
        initial={{opacity: 0}}
        animate={show ? 'open' : 'closed'}
        variants={variants}
        transition={{duration: 0.5}}
      >
        <motion.div className='inner-nav'>
          <ul>
            <li>
              <a onClick={() => routerHelper('/dashboard')}>Dashboard</a>
            </li>
            <li>
              <a onClick={() => routerHelper('/user-settings')}>User Info</a>
            </li>
            <li>
              <MyButton style={{width: '100%'}}>Log Out</MyButton>
            </li>
          </ul>
        </motion.div>
      </motion.nav>
      <motion.button
        className='toggle'
        onClick={() => setShow(!show)}
        whileHover={{scale: 1.1}}
        whileTap={{scale: 0.9}}
      >
        {show ? <CloseIcon style={{color: '#fff'}} />:<MenuIcon style={{color: '#fff'}} />}
      </motion.button>
    </>
  )
}

export default NewNav