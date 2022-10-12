import React from 'react'
import LandingNav from '../components/nav/landingNav'
import Card from "react-bootstrap/Card"
import MyButton from '../components/button/MyButton'
import {landingData, org, lab} from './data'

import '../styles/Landing.css'

const Landing = () => {
  return (
    <>
      <div className='stickyNav'>
        <LandingNav />
      </div>
      <div className="landingLayout">
        {landingData.map((data) => (
          data.hasBtn ? (
          <>
            <MyButton>Get Started Now</MyButton>
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