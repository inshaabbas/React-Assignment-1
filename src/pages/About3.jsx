import React from 'react'
import Card3 from '../components/aboutCard3/Card3'
import About3Img from "../assets/About-3-img.svg"

const About3 = () => {
  return (
    <>
    <div className='about3-section'>
      <div className='about3-img'>
        <img src={About3Img} alt="About3 Img" className='img-fluid'/>
      </div>
      <div className='about3-cards'>
        <Card3/>
      </div>
    </div>
    </>
  )
}

export default About3