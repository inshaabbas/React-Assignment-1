import React from 'react'
import Mobile1 from "../assets/mobile-1.png"
import Mobile2 from "../assets/mobile-2.png"
import "../styles/style.css"

const Home = () => {
  return (
    <>
    <div id='home' className='hero-section container-xxl'>
        <div className='hero-text'>
            <h2>Promote Your App with SoftLand</h2>
            <p>We are team of talented designers making websites with Bootstrap</p>
            <div className='hero-btn'>
                <button><i class="bi bi-google-play"></i> Google Play</button>
                <button><i class="bi bi-apple"></i> App Store</button>
            </div>
        </div>
        <div className='hero-img'>
            <img className='mobl-back img-fluid' src={Mobile2} alt="Mobile 2" />
            <img className='mobl-front img-fluid' src={Mobile1} alt="Mobile 1" />
        </div>
    </div>
    </>
  )
}

export default Home