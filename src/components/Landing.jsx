import { motion, stagger } from 'framer-motion'
import { Expo } from 'gsap'

import React from 'react'

function Landing() {
  
  return (
    <div className='relative w-full  h-[150vh] sm:h-[250vh]'>
      <div  className="picture w-full h-full overflow-hidden">
        <img
        data-scroll
         data-scroll-speed="-1"
          className='w-full h-full object-cover'
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)" alt="" />
      </div>
      <div className="w-full absolute top-0">
        <div className="absolute text max-w-screen-2xl text-white mx-auto top-0 h-full -mt-16 px-5 sm:px-10">
          <div className="para mt-72 sm:mt-96">
            {["Global digital design studio partnering with", 
              "brands and businesses that create",
               " exceptional  experiences where people", 
               "live, work, and unwind."].map((item, idx)=>{
                return   <p key={idx} className='text-md sm:text-2xl marker font-medium  overflow-hidden'>
                <motion.span
                 initial={{rotate:90, y:"100%", opacity:0}}
                  animate={{rotate:0, y:0, opacity:1}}
                   transition={{ease:[0.22, 1, 0.36, 1], duration:.8, delay:idx*.2}} 
                   className='inline-block origin-left'>
                {item}
                 </motion.span>
                  </p>
               })
               }
           
          </div>
          <div className="headings mt-5 sm:mt-10">
            {['Digital', 'Design', 'Experience'].map((item, idx)=>{
               return  <h1 className='text-6xl sm:text-9xl tracking-tight font-medium py-[10px] md:py-5 leading-none overflow-hidden'>
                 <motion.div initial={{rotate:90, y:"100%", opacity:0}}
                 animate={{rotate:0, y:0, opacity:1}}
                 transition={{ease:[0.22, 1, 0.36, 1], duration:0.8, delay:1+idx*.15}}
                 className='inline-block origin-left'>
                 {item}
                 </motion.div>
                 </h1>
            })}
           
          </div>

          <div className='para2 mt-10 sm:mt-20 sm:w-1/3'>
            <p className='sm:text-2xl'>We Help Experience-driven companies thrive by making their audience feel the refined intricacaies of their brand and product in the digital space. Unforgetable joruneys start with a click.</p>
            <a className='sm:text-xl border-b-[.3px] border-zinc-100 pb-1 mt-10 inline-block' href="#">The Studio</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Landing