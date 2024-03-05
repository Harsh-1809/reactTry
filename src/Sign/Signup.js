import React from 'react'
import "./Sign.css"
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
      <>
          <h1 id='sign-h1'>npm</h1>
          <div id='sign-up'>
          <section id='signup-section'>Sign Up</section>
          <section id='sign-user' className='sign'>
              <label htmlFor="text" className='label-sec'>Username*</label>
              <input type="text" className='input-sec'/>
          </section>
          <section id='sign-email' className='sign'>
              <label htmlFor="text" className='label-sec'>Email Address</label>
              <input type="email" className='input-sec'/>
          
              <p className='sec-p'>Your email address will be added to the metadata of packages that you publish, so it may be seen publicly.</p>
              
           </section>
          <section id='sign-pass' className='sign'>
              <label htmlFor="text" className='label-sec'>Password</label>
              <input type="password" className='input-sec'/>
              <p className='sec-p'>Minimum of 10 characters and must meet our password guidelines</p>
          </section>
          <section id='check'>
              <input type="checkbox" name="" id="check-sec" /><p id='check-p'>i agree to the End User License Agreement and the Privacy Policy. * </p>
          <button id='btn-sec'>Create an Account</button>
          </section>
          </div>
          <p id="text-p">Already have an Account</p>
          <button id='btn-sec-sign'><Link to="/signin">Sign In</Link></button>
      </>
  )
}

export default Signup
