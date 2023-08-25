import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Services.css'
import essay from '../images/essay.png'
import './Scholarships.css'
import compass from '../images/compass.png'
import interview from '../images/interview.png'
function Services() {
  return (
    <div>
      <Navbar/>
        <div className='sp'>
          <div className='title'>
              Wanna be a <span className='highlighted'>Step Ahead </span>?
          </div>
          <div>
            <p className='parag'>
              Applying to scholarships with no prior experience can be intimidating,
              that's why we would like to offer you a guiding hand.
              <br></br>
              Luckily, we have a team of accomplished students that have already gone through that
              arduous process and are willing to give you assistance in your academic journey.
            </p>
            <div className='title'>
                How exactly do we help you?
            </div>
            <div className='section'>
              <div className='byst'>
                <img src={essay} alt='noee'></img>
              </div>
              <div className='descrip'>
                Essay Proofreading
              </div>
            </div>
            <div className='section'>
              <div className='byst'>
                <img src={interview} alt='noee'></img>
              </div>
              <div className='descrip'>
                Mock Interviewing
              </div>
            </div>
            <div className='section'>
              <div className='byst'>
                <img src={compass} alt='noee'></img>
              </div>
              <div className='descrip'>
                One-on-One <br></br> Guidance  sessions
              </div>
            </div>
          </div>

        </div>
      <Footer/>
    </div>
  )
}

export default Services