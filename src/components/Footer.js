import React from 'react'
import './Footer.css'
import maillogo from '../images/mail.png'
import tt from '../images/OIP.png'
function Footer() {
  return (
    <div>
      <div  className='footer'>
        <div className='title2'> 
          Contact Us
        </div>
        <div className='email'>
          <div className='emaillogo'><img src={maillogo} alt='maillogopic'></img></div>
          <div className='emaillink'><a href='mailto:universityguide0@gmail.com'> Click me to send an email! </a></div>
        </div>
        <div className='email'>
          <div className='emaillogo'><img src={tt} alt='maillogopic'></img></div>
          <div className='emaillink'> Follow us on TikTok!</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
