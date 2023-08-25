import React from 'react'
import './Footer.css'
import maillogo from '../images/mail.png'
import tt from '../images/OIP.png'
import ig from '../images/ig.png'
function Footer() {
  return (
    <div>
      <div  className='footer'>
        <div className='title2'> 
          Contact Us
        </div>
        <div className='email'>
          <div className='emaillogo'><img src={maillogo} alt='maillogopic'></img></div>
          <div className='emaillink'><span ><a className='vertical' href='mailto:universityguide0@gmail.com'> Click me to send an email! </a></span></div>
        </div>
        <div className='email'>
          <div className='emaillogo'><img src={tt} alt='maillogopic'></img></div>
          <div className='emaillink'>Follow us on TikTok!</div>
        </div>
        <div className='email'>
          <div className='emaillogo'><img src={ig} alt='maillogopic'></img></div>
          <div className='emaillink'>Follow us on Instagram!</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
