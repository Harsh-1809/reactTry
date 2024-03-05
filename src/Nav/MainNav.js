import React from 'react'
import UpperNav from './UpperNav'
import LowerNav from './LowerNav'

const MainNav = () => {
  return (
    <div>
      <section className='partition'>
            <UpperNav/>  
          </section>
          <section className='partition'>
            <LowerNav/>  
      </section>
    </div>
  )
}

export default MainNav
