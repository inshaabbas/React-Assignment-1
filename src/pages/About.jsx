import React from 'react'
import Card1 from "../components/aboutCard1/Card1"
import About2 from "../pages/About2"
import About3 from './About3'

const About = () => {
  return (
    <>
    <div className='about-section container-xxl' id='about'>
      <div className='about-text'>
        <h3>About Us</h3>
        <h2>Ducimus rerum libero reprehenderit cumque</h2>
        <p>Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis minus et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem tempora deleniti soluta.</p>
        <button><a href="/">Read More <i class="bi bi-arrow-right"></i></a></button>
      </div>
      <div>
        <Card1/>
      </div>
    </div>
    <About2/>
    <About3/>
    </>
  )
}

export default About