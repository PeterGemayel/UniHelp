import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Scholarships.css'
import yeslogo from '../images/yes-logo.png'
import tg from '../images/tg.jpg'
import rsi from '../images/rsi.png'
function ExchangePrograms() {
  return (
    <div>
      <Navbar/>
      <div className='twp'>
        <div className='title'>
          Exchange Programs<span className='highlighted'>!</span>
        </div>
        <div>
          <p className='parag'> Exchange Programs are less easy to find and are fewer in General, but don't let that stop 
          you from applying to the listed programs!
          <br>
          </br>
          <div className='sidenote'>
            Don't forget that <span>Gatekeeping </span> is for <span> losers</span>.</div></p>
        </div>
        <div className='sklrp'>
          <div className='imaje'>
            <img src={yeslogo} alt='none' ></img>
          </div>
          <div className='descr'>
            <div className='subtitle'>
              YES Program.
            </div>
            <div className='brief'>
              If admitted to YES you can spend an academic year (grade 11) at a U.S. high school!
              <br></br>
              <br></br>
              <a href='https://www.yesprograms.org/countries/lebanon'>Click me to know more!</a>
            </div>
          </div>
        </div>
        <div className='sklrp'>
          <div className='imaje'>
            <img src={tg} alt='none' ></img>
          </div>
          <div className='descr'>
            <div className='subtitle'>
              TechGirls Program.
            </div>
            <div className='brief'>
            TechGirls is an international summer exchange program 
            designed to empower and <br></br>inspire  young women from around
             the world to pursue careers in science and technology.
              <br></br>
              <br></br>
              <a href='https://techgirlsglobal.org/'>Click me to know more!</a>
            </div>
          </div>
        </div>
        <div className='sklrp'>
          <div className='imaje'>
            <img src={rsi} alt='none' ></img>
          </div>
          <div className='descr'>
            <div className='subtitle'>
              RSI Program.
            </div>
            <div className='brief'>
            Since 1993, the MIT Mathematics Department has participated <br></br>in the 
            Research Science Institute (RSI), an MIT-hosted <br></br>six-week summer program for rising high
             school seniors. <br></br>RSI students are chosen for their superior achievement in math, science and engineering.
              <br></br>
              <br></br>
              <a href='https://www.cee.org/programs/apply-rsi'>Click me to know more!</a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ExchangePrograms