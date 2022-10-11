import React from 'react'
import LandingNav from '../components/nav/landingNav'
import Card from "react-bootstrap/Card"
import meeting from "../img/meeting.jpeg"
import '../styles/Landing.css'

const Landing = () => {
  return (
    <>
      <div className='stickyNav'>

        <LandingNav />
      </div>
      <div className="landingLayout">
        <div className="jumboContainer">
          <div className="jumbotron">
            <h1>Start Managing Your Lab Today</h1>
            <div className="divDivider"></div>
            <div className="about">
          <div className="title">
            <h2>What is LabRats?</h2>
          </div>
          <div className="bio">
            <p>LabRats is a Laboratory Management system for Principle Investigators (PI's), Graduate Research Assistants (GRA's), and Undergraduate Research Assistants (URA's). Here, you can create a Lab, Projects, and Tasks that are assignable to your lab members. With Lab Rats, you can now reference current operations within the lab in a simple, streamlined fashion.</p>
          </div>
        </div>
          </div>
          <div className="jumboImage" style={{backgroundImage: meeting}}>
            {/* <img src={meeting}/> */}
          </div>
        </div>
        <div>
          <h1>New Text Here</h1>
          <h1>New Text Here</h1>
          <h1>New Text Here</h1>
          <h1>New Text Here</h1>
          <h1>New Text Here</h1>
          <h1>New Text Here</h1>
        </div>
      </div>
    </>
  )
}

export default Landing