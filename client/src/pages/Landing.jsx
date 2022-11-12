import React, { useEffect } from 'react'
import LandingNav from '../components/nav/landingNav'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MyButton from '../components/button/MyButton'
import {landingData} from './data'

import '../styles/Landing.css'

const Landing = () => {

  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth)
  useEffect(() => {
    if (user) {
      navigate('/dashboard')
    }
  }, [user, navigate])

  return (
    <>
      <div className='stickyNav'>
        <LandingNav />
      </div>
      <div className="landingLayout">
        {landingData.map((data) => (
          data.hasBtn ? (
          <>
            <div className="jumboContainer">
              
              <div className="jumbotron">
                <MyButton props={'100%'} onClick={(e) => {navigate('/register')}}>Get Started Now !!</MyButton>
                <h1>{data.jumboTitle}</h1>
                <div className="divDivider"></div>
                <div className="about">
                  <div className="title">
                    <h2>{data.aboutTitle}</h2>
                  </div>
                  <div className="bio">
                    <p>{data.bio}</p>
                  </div>
                </div>
              </div>
              <div className='jumboImage'>
                <img src={data.img} alt='card-img'/>
              </div>
            </div>
          </>
          ) : (
            <div className="jumboContainer">
              <div className="jumbotron">
                <h1>{data.jumboTitle}</h1>
                <div className="divDivider"></div>
                <div className="about">
                  <div className="title">
                    <h2>{data.aboutTitle}</h2>
                  </div>
                  <div className="bio">
                    <p>{data.bio}</p>
                  </div>
                </div>
              </div>
              <div className='jumboImage'>
                <img src={data.img}/>
              </div>
            </div>
          )
        
        ))}
      </div>
    </>
  )
}

export default Landing