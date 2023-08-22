import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Home.css'
import img1 from '../images/founderpic.png'
function Home() {
  return (
    <div>
      <Navbar/>
      <div className='title'>
        We Want to <span className='highlighted'>Help You!</span>
      </div>
      <p className='parag'>
        Being a Great High School student in Lebanon isn't
        enough to get you the education you deserve, UniHelp 
        is an online platform created to shed light on various scholarships
        and programs that could potentially offer you the education 
        you want!
      </p>

        <div className='lower1'>
            <span className='title1'>About</span>
            <br></br>
            <div className='fd'>
            <div className='pix'><img src={img1} alt='picoffoiunder'></img></div>
            <div className='sidetext'><br></br>
            My name is Peter, I am the founder of <span className='unihelpp'> uniHelp</span>. After I graduated from High School
            in 2022 with an 18.5 average on the Official Lebanese Bac-II, I found out
             about the tons of opportunities that I had missed. I am now a 2nd year engineering student at the
             Lebanese University. I set out to help other Lebanese students get the
             education they want through the scholarships and programs that I missed applying to.
             I hope you find this page helpful!
            </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home