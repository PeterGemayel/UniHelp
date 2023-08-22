import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import {Component} from 'react';
class Navbar extends Component {
  state = {clicked: false};
  handleClick =()=>{
    this.setState({clicked:!this.state.clicked})
  }
  render(){
  return (
    <div>
      <nav>
        <div className='logo'>
          UniHelp
        </div>
        <div className="container">
          <ul id="navbar" className={this.state.clicked? '#navbar active' : '#navbar'}>
            <li><Link className={'my-link'} to='/'>Home</Link></li>
            <li><Link className='my-link' to='/Services'>Services</Link></li>
            <li><Link className='my-link' to='/Scholarships'>Scholarships</Link></li>
            <li><Link className='my-link' to='/ExchangePrograms'>Exchange Programs</Link></li>

          </ul>
        </div>

        <div id='mobile' onClick={this.handleClick}>
          <i id='bar' className={this.state.clicked ? 'fas fa-times':'fas fa-bars'}></i>
        </div>
      </nav>
    </div>
  )
}
}
export default Navbar