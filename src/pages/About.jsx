import React from 'react'
import banner2 from "../assets/images/test2.jpg"
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h3>About</h3>
      <img src={banner2} alt='about-page' className='about-banner' />
      <div className="div">
      <Link to="/" className='link-btn'>Go Back</Link>
      </div>
    </div>
  )
}

export default About