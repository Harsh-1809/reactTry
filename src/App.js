import React from 'react'
import Home from './Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './Sign/Signin'
import Signup from './Sign/Signup'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/Signin' element={<Signin/>} />
        </Routes>
    </BrowserRouter>
      </>
  )
}

export default App
