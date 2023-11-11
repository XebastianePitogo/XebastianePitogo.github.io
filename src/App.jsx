import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Navbar/Hero/Hero'
import { Loader } from '@react-three/drei'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Suspense fallback={null}>
          <Hero/>
        </Suspense>
        <Loader/>
      </BrowserRouter>
    </>
  )
}

export default App
