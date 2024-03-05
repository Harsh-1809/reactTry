import React from 'react'
import bub from "../Assets/buble.png"
import "./Content.css"
const Content = () => {
  return (
    <div id='mid-content'>
          <img src={bub} alt="" id='bub'/>
          <div>
            <h1 id='h1-content'>Bring the best of open source to you, your team, and your company</h1>
            <p id='p-content'>Relied upon by more than 17 million developers worldwide, npm is committed to making JavaScript development elegant, productive, and safe. The free npm Registry has become the center of JavaScript code sharing, and with more than two million packages, the largest software registry in the world. Our other tools and services take the Registry, and the work you do around it, to the next level.</p>
          </div>
    </div>
  )
}

export default Content
