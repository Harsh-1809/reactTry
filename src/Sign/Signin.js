import React from 'react'
import npm from "../Assets/npmlogo.png"
import eyes from "../Assets/pandacloseeye.png"
import eyesclose from "../Assets/pandaclosed.png"
import body from "../Assets/pandabody.png"
import happyeye from "../Assets/pandaeye.png"
import "./Signin.css"
import { Link } from 'react-router-dom'
const Signin = () => {
  return (
    <>
              <img src={npm} alt="" id='npm'/>
          <div id='sign-up-2'>
              <section id='space'></section>
              <div id='panda-div'>
                  <img src={body} alt="" className='panda' id='body' />
                  <img src={happyeye} alt="" className='panda' id='eye'/>
              </div>
          <section id='signup-section'>Sign In</section>
          <section id='sign-user' className='sign'>
              <label htmlFor="text" className='label-sec'>Username*</label>
              <input type="text" className='input-sec'/>
          </section>
          <section id='sign-pass' className='sign'>
              <label htmlFor="text" className='label-sec'>Password</label><p className='sec-p'>Forgot password</p>
              <input type="password" className='input-sec'/>
                  
                  <button id='create-sec'><Link to="/signup">Creat Account</Link></button>
              </section>
              
          </div>
          
    </>
  )
}

export default Signin
