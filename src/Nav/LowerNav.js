import React from 'react'
import { Link } from 'react-router-dom'
const LowerNav = () => {
  return (
      <div id='lower-nav'>
           <div id='npm-link'>
             <a href="/" aria-label='Npm' >Npm</a>
          </div>    
          <div id='search-bar'>
              <input type="search" id='bar'/><button className='sign-btn' id='search-btn'>search</button>
          </div>
          <div id='sign'>
              <button className='sign-btn'><Link to="/signup">Sign Up</Link></button><button className='sign-btn'><Link to="/signin">Sign In</Link></button>
          </div>
      </div>
  )
}

export default LowerNav
