import React from 'react'
import "./UpperNav.css"
const UpperNav = () => {
  return (
    <div id='upper-Nav'>
          <span id='heart'>❤</span>
          <button id='btn-upperNav'><a href="https://github.com/npm/npm-expansions">Nefarious Pickle Muncher</a></button>
          <nav >
              <ul id='nav-ul'>
                <li className='list'><a href="https://www.npmjs.com/products/pro">Pro</a></li>
                <li className='list'><a href="https://www.npmjs.com/products/teams">Team</a></li>
                <li className='list'><a href="https://www.npmjs.com/products">Pricing</a></li>
                <li className='list'><a href="https://docs.npmjs.com/">Documentation</a></li>
              </ul>
          </nav>
    </div>
  )
}

export default UpperNav
