import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Work from './components/Work'
import PlayReel from './components/PlayReel'
import Pictures from './components/Pictures'
import Spreads from './components/Spreads'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full'>
      <Navbar/>
      <Landing/>
      <Work/>
      <PlayReel/>
      <Pictures/>
      <Spreads/>
    </div>
  )
}

export default App
