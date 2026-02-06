import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='contact-section container-xxl' id='contact'>
      <div className='contact-head'>
        <h2>Contact</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className='contact-main'>
        <div className='contact-text'>
          <div className='address'>
            <div className='con-text-add-icon'><i class="bi bi-geo-alt"></i></div>
          <div className='con-text-address'>
            <h3>Address</h3>
            <p>A108 Adam Street, New York, NY 535022</p>
          </div>
          </div>
          <div className='call'>
            <div className='con-text-call-icon'><i class="bi bi-telephone"></i></div>
          <div className='con-text-call'>
            <h3>Call Us</h3>
            <p>+1 5589 55488 55</p>
          </div>
          </div>
          <div className='email'>
            <div className='con-text-email-icon'><i class="bi bi-envelope"></i></div>
          <div className='con-text-email'>
            <h3>Email Us</h3>
            <p>info@example.com</p>
          </div>
          </div>
        </div>
      <div className='contact-form'>
        <div className='form-info'>
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Your Email'/>
        </div>
        <div className='form-subject'>
          <input type="text" placeholder='Subject' />
        </div>
        <div className='form-msg'>
          <textarea name="msg" id="msg">Message</textarea>
        </div>
        <div className='form-btn'>
        <button>Send Message</button>
      </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Contact