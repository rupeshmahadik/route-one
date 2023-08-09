import React from 'react'
import banner from "../assets/images/test1.jpg"

const Home = () => {
  return (
    <div>
      <h3>Home</h3>
      <img src={banner} alt='home-page' className='home-banner' />
    </div>
  )
}

export default Home

