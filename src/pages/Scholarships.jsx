import React from 'react'
import './Scholarships.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import uslogo from '../images/usembassy.jpg'
import uslogo2 from '../images/dos-logo-light.jpg'
import ajialouna from '../images/Aj-1.png'
import lifelogo from '../images/lifescholarship.png'
import pj from '../images/apjlogo2.png'
import lau from '../images/lau.png'
import tarraf from '../images/Tarraf-Foundation-logo.png'
import alexis from '../images/logo.png'
import amideast from '../images/OIPP.jpg'
function Scholarships() {
  return (
    <div>
      <Navbar/>
      <div className='twp'>
        <div className='title'>
          Scholarships<span className='highlighted'>!</span>
        </div>
        <div>
          <p className='parag'>Reminder: UniHelp <span className='highlighted'>isn't in any way</span> involved in the selection process of the shown 
            scholarships. Simply put, UniHelp <span className='highlighted'> only </span>sheds light on programs and organizations that already offer
            scholarships to students.</p>
          <p className='parag'>
            Also, not all available scholarships are listed in here, there are still
            a lot of opportunities that we don't know about,
            if you're familiar with a scholarship that isn't listed, 
            send us an email to get it listed. <br></br>
            <div className='sidenote'>
            Don't forget that <span>Gatekeeping </span> is for <span> losers</span>.</div>
          </p>
        </div>
        <div className='sklrp'>
          <div className='imaje'>
            <img src={uslogo} alt='USEmbassyLogo'></img>
          </div>
          <div className='descr'>
            <div className='subtitle'>
              USAID HES(Higher Education Scholarship).
            </div>
            <div className='brief'>
              Offered at: AUB, LAU.
              <br></br>
              Critical points: Financial state, Official Exam Score, Leadership.
              <br></br>
              <a href='https://lb.usembassy.gov/usaid-higher-education-scholarship/'>Click me to know more!</a>
            </div>
          </div>
        </div>
        <div className='sklrp'>
          <div className='imaje'>
            <img src={uslogo2} alt='USEmbassyLogo2'></img>
          </div>
          <div className='descr'>
            <div className='subtitle'>
              MEPI Tomorrow's Leaders Program.
            </div>
            <div className='brief'>
              Offered at: AUB, LAU, AUC.
              <br></br>
              Critical points: Academic Achievement, Financial state, Civic Engagement.
              <br></br>
              <a href='https://mepi.state.gov/leadership/tomorrows-leaders-program/tlu/'>Click me to know more!</a>
            </div>
          </div>
        </div>
        <div className='sklrp'>
          <div className='imaje'>
            <img src={lifelogo} alt='lifelogo'></img>
          </div>
          <div className='descr'>
            <div className='subtitle'>
              Life Scholarship.
            </div>
            <div className='brief'>
              Offered at: AUB, LAU, USEK, NDU, USJ, UOB, UA.
              <br></br>
              <a href='https://www.lifelebanon.com/scholarship/life'>Click me to know more!</a>
            </div>
          </div>
        </div>
        <div className='sklrp'>
          <div className='imaje'>
            <img src={ajialouna} alt='USEmbassyLogo2'></img>
          </div>
          <div className='descr'>
            <div className='subtitle'>
              TOMOOH Scholarship.
            </div>
            <div className='brief'>
              Offered at: AUB, LAU & more.
              <br></br>
              <a href='https://ajialouna.org/education/'>Click me to know more!</a>
            </div>
          </div>
        </div>
        <div className='sklrp'>
          <div className='imaje'>
            <img src={pj} alt='pj'></img>
          </div>
          <div className='descr'>
            <div className='subtitle'>
              Association Philippe Jabre.
            </div>
            <div className='brief'>
            The application asks the applicant to fill in the University <br></br> which he/she wants to pursue his/her education at.
              <br></br>
              <a href='https://apj.org.lb/'>Click me to know more!</a>
            </div>
          </div>
        </div>
        <div className='sklrp'>
          <div className='imaje'>
            <img src={lau} alt='USEmbassyLogo2'></img>
          </div>
          <div className='descr'>
            <div className='subtitle'>
              LAU Merit Scholarship.
            </div>
            <div className='brief'>
              Offered at: LAU.
              <br></br>
              Critical points: Academic Excellence, Extra-Curriculars.
              <br></br>
              <a href='https://www.lau.edu.lb/apply/financial-aid/scholarships.php'>Click me to discover more scholarships at LAU!</a>
            </div>
          </div>
        </div>
        <div className='sklrp'>
          <div className='imaje'>
            <img src={alexis} alt='USEmbassyLogo2'></img>
          </div>
          <div className='descr'>
            <div className='subtitle'>
              Alexis & Anne-Marie Habib foundation.
            </div>
            <div className='brief'>
            The application asks the applicant to fill in the University <br></br> which he/she wants to pursue his/her education at.
              <br></br>
              <a href='https://www.habibfoundation.org/'>Click me to know more!</a>
            </div>
          </div>
        </div>
        <div className='sklrp'>
          <div className='imaje'>
            <img src={tarraf} alt='USEmbassyLogo2'></img>
          </div>
          <div className='descr'>
            <div className='subtitle'>
              Tarraf Foundation.
            </div>
            <div className='brief'>
              The application asks the applicant to fill in the University <br></br> which he/she wants to pursue his/her education at.
              <br></br>
              <a href='https://tarraffoundation.org/'>Click me to know more!</a>
            </div>
          </div>
        </div>
        <div className='sklrp'>
          <div className='imaje'>
            <img src={amideast} alt='USEmbassyLogo2'></img>
          </div>
          <div className='descr'>
            <div className='subtitle'>
              Diana Kamal Scholarship Search Fund (DKSSF).
            </div>
            <div className='brief'>
              This program offers scholarships to U.S. universities.
              <br></br>
              <a href='https://www.amideast.org/lebanon/find-a-scholarship/undergraduate-study/diana-kamal-scholarship-search-fund-dkssf'>Click me to know more!</a>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Scholarships
