import React from 'react'
import '../navbar/navbar.css';
import iconMessage from './assets/message.png'
import ranking from './assets/ranking.png'
import home from './assets/home.png'
import numbers from './assets/numbers.png'
import profile from './assets/profile.png'


const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='content-navbar'>
          <div className='box-navbar'>   
              <img src= { iconMessage } alt="logo"/> 
          </div>
          <div className='box-navbar'>
            <img src= { ranking } alt="logo"/> 
          </div>
          <div className='box-navbar'>
            <img src= { home } alt="logo" className='home-button'/> 
          </div>
          <div className='box-navbar'>
            <img src= { numbers } alt="logo"/> 
          </div>
          <div className='box-navbar'>
            <img src= { profile } alt="logo"/> 
          </div>

      </div>
    </div>
  )
}

export default NavBar