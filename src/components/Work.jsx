import React, { useState } from 'react'
import {motion} from 'framer-motion'

function Work() {
    const [elems, setElems] = useState([

        {
            heading: "Rino & Pelle",
            subHeading: "Effortless chic lifestyle",
            video: "https://download-video-ak.vimeocdn.com/v3-1/playback/4692069d-08ba-4820-846c-31007f25c1ee/3109df1e?__token__=st=1744746354~exp=1744760754~acl=%2Fv3-1%2Fplayback%2F4692069d-08ba-4820-846c-31007f25c1ee%2F3109df1e%2A~hmac=b5637d2be51ec426c9aa4302a4be460266d3734de76fabd3d3a73fc6cbe8c65a&r=dXMtd2VzdDE%3D",
            image: "https://a.storyblok.com/f/133769/2409x3000/c155d3e27e/amaterasu-hero.jpg/m/1300x1619/filters:quality(90)",
        },
        {
            heading: "Aebele Interiors",
            subHeading: "Luxurious design experience",
            video: "https://player.vimeo.com/progressive_redirect/playback/1020697798/rendition/720p/file.mp4?loc=external&log_user=0&signature=cd45f23683db91c40f08a3f4a31ba153f1e93eac3d4f98cb3ca4b651b8830d04",
            image: "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",
        },
        {
            heading: "Columbia Pictures",
            subHeading: "Celebrating a Century of Cinema",
            video: "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a",
            image: "https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)",
        },
        {
            heading: "Pixelsflakes",
            subHeading: "Architectural Marketing Agency",
            video: "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a",
            image: "https://a.storyblok.com/f/133769/2400x2990/729680ed7f/ottografie-2025-hero.jpg/m/1300x1620/filters:quality(90)"
        },
    ])
    return (
        <div className='w-full relative'>
            <div className="max-w-screen-2xl py-20 mx-auto px-5 sm:px-10">
                <div className='featured flex gap-3'>
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                    <h1 className='capitalize'>featured projects</h1>

                </div>
                <h1 className='text-6xl sm:text-[13rem] sm:leading-none sm:tracking-tight my-5 overflow-hidden'>
                    <motion.span initial={{rotate:90, y:"40%", opacity:0}}
                     whileInView={{rotate:0, y:0, opacity:1}}
                     viewport={{once:true}}
                     transition={{ease:[0.22, 1, 0.36, 1],
                        duration:0.8,
                        
                     }}
                      className='inline-block origin-left'>
                    Work
                    </motion.span>
                    </h1>

                <p className='leading-none text-md'>Highlights of cases that we passionately built with forward-thinking clients and friends over the years.</p>
                <div className="elems mt-10 sm:flex sm:flex-wrap sm:gap-5">
                    {
                        elems.map((items, idx) => {
                            return (
                                <div key={idx} className="elem w-full sm:w-[48%] mt-10">

                                    <div className="video w-full h-[104vw] sm:h-[50vw] relative overflow-hidden">
                                        <motion.img
                                        initial={{opacity:1}}
                                        
                                        whileHover={{opacity:0}}
                                        data-scroll
                                        data-scroll-speed="-.4"
                                         className='hidden sm:block sm:absolute sm:z-[2] sm:top-0 sm:left-0 w-full h-full object-cover' src={items.image} alt="" />
                                        <video className='w-full block relative  scale-[1.3] h-full  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' loop muted autoPlay src={items.video}></video>

                                    </div>
                                    <div className="mt-4">
                                        <h3 className='font-semibold text-sm'>Pixelflakes</h3>
                                        <h3 className='capitalize opacity-40 text-sm'>Architectural Marketing Agency</h3>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </div>
    )
}

export default Work