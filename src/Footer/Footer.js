import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div id='footer'>
          <div id='logos-footer'>
              
      </div>
          <div id='support-footer' className='div-foot'>
              <h3>Support</h3>
              <ul className='ul-foot'> 
                <li className='list-foot'>Help</li>
                <li className='list-foot'>Advisories</li>
                <li className='list-foot'>Status</li>
                <li className='list-foot'>Contact npm</li>
              </ul>
      </div>
          <div id='company-footer' className='div-foot'>
              <h3>Company</h3>
              <ul className='ul-foot'>
                <li className='list-foot'>About</li>
                <li className='list-foot'>Blog</li>
                <li className='list-foot'>Press</li>
              </ul>
      </div>
          <div id='terms-footer' className='div-foot'>
              <h3>Terms & Policies</h3>
              <ul className='ul-foot'>
                <li className='list-foot'>Policies</li>
                <li className='list-foot'>Terms of Use</li>
                <li className='list-foot'>Code of Conduct</li>
                <li className='list-foot'>Privacy</li>
              </ul>
      </div>
    </div>
  )
}

export default Footer
