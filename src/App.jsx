import React from 'react'
import Navbar from './Components/Navbar'
import LandingPage from './Components/LandingPage'
import Marquiee from './Components/Marquiee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Tured from './Components/Tured'
import Cards from './Components/Cards'
import IYE from './Components/IYE'
import Footer from './Components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import Client from './Components/Client'





function App() {
  
  const locomotiveScroll = new LocomotiveScroll();
  return (
    

     

    <div className='w-full min-h-screen bg-zinc-900 text-white'> <Navbar/>
    <LandingPage/>
    <Marquiee />
    <About/>
    <Eyes/>
    <Tured/>
    <Cards/>
    <Client/>
    <IYE/>
    <Footer/>
    </div>
   
  )
}

export default App