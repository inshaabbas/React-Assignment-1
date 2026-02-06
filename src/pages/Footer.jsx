import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <h3>SoftLand</h3>
            <p><em>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</em></p>
            <div className='foot-social-icons'>
                <div className='icon-1'><i class="bi bi-twitter-x"></i></div>
                <div className='icon-2'><i class="bi bi-facebook"></i></div>
                <div className='icon-3'><i class="bi bi-instagram"></i></div>
                <div className='icon-4'><i class="bi bi-skype"></i></div>
                <div className='icon-5'><i class="bi bi-linkedin"></i></div>
            </div>
        </div>
        <hr />
        <div className='footer-bottom'>
            <p>Copyright <strong>SoftLand</strong> All Rights Reserved</p>
            <p className='developer'>Designed by BootstrapMade <strong>Insha Abbas</strong></p>
        </div>
    </div>
  )
}

export default Footer