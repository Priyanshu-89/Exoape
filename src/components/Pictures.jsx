import gsap, { Linear, Power4, ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react'

const Pictures = () => {
const first=  useRef(null);
const third=  useRef(null);
const second=  useRef(null);
const fourth=  useRef(null);
const parent=  useRef(null);

useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);
    const t1=gsap.timeline(
     {
      scrollTrigger:{
        trigger:parent.current,
        start:"0 90%",
        scrub:1
      }
     }
    );
    t1.to(first.current,{
      x:"40%",
      ease:Linear
    }, 'a')
    .to(third.current,{
      x:"-40%",
      ease:Linear
    }, 'a')
    .to(second.current,{
      x:"-40%",
      y:"-40%",
      ease:Linear
    },'a')
    .to(fourth.current,{
      x:"40%",
      y:"40%",
      ease:Linear
    },'a')

})
  return (
    <div ref={parent} className='w-full h-[70vh] bg-white-600 flex items-center justify-center overflow-hidden'>
      <div className="w-[40%] h-1/2 relative">
      <div ref={first} className='absolute w-36 h-48  -right-1/3 top-6 md:left-[90%]  md:-top-[9%]'>
     <video className='w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' loop muted autoPlay src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video>
      </div>
      <div ref={second} className='absolute w-[7rem] aspect-video md:-left-[10%] md:h-[6rem] md:-top-[9%]  -left-1/2 top-1/3'>
      <img className='w-full h-full object-cover ' src="https://images.unsplash.com/photo-1626978407649-de62156f1548?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div ref={third} className='absolute w-[9rem] aspect-video left-[60%]  -bottom-10'>
        <video loop muted autoPlay className='w-full h-full' src="https://videos.pexels.com/video-files/3444430/3444430-hd_1920_1080_30fps.mp4"></video>
      </div>
      <div ref={fourth} className='absolute w-[8rem] aspect-video -left-[70%] md:-left-[7%] md:h-[10rem] md:top-[60%] -bottom-16'>
        <video className='w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' loop muted autoPlay src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"></video>
      </div>
      <img className='w-full h-full object-cover' src="https://wallpaperaccess.com/full/2350259.png" alt="" /></div>
    </div>
  )
}

export default Pictures
