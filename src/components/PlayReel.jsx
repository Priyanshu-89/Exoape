
import gsap, { Power4, ScrollTrigger } from 'gsap/all';
import React, { useEffect, useRef } from 'react'

function PlayReel() {

    const parent = useRef(null);
    const videoDiv = useRef(null);
    const play = useRef(null);
    const reel = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        let t1 = gsap.timeline({
            scrollTrigger: {
                trigger: parent.current,
                top: "0 0",
                pin: true,
                scrub: 1,

            },
        })
       t1
        .to(videoDiv.current,{
            width: "105%",
            height: "105%",
            ease: Power4
        }, 'a'),
        t1.to(play.current,{
                x:"100%",
                scale:1.2,
                ease: Power4
        }, 'a')

        t1.to(reel.current,{
            x:"-100%",
            scale:1.2,
            ease: Power4
    }, 'a')
        
          
        
    });
    return (
        <div ref={parent} className='w-full h-screen overflow-hidden relative  bg-black'>
            <div ref={videoDiv} className="w-32 sm:w-96 overflow-hidden aspect-video  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <video loop muted autoPlay className='w-full h-full scale-[3]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="https://download-video-ak.vimeocdn.com/v3-1/playback/334619e0-f92f-4627-ba88-dfe521b4e062/9e976370?__token__=st=1744747562~exp=1744761962~acl=%2Fv3-1%2Fplayback%2F334619e0-f92f-4627-ba88-dfe521b4e062%2F9e976370%2A~hmac=0b00daa49f82579d2e262e0bb39a2557dd6170a28c7689a61e4801e2e36b0cbd&r=dXMtY2VudHJhbDE%3D"></video>
            </div>
            <div className="overlay absolute w-full h-full text-white flex flex-col justify-between py-12">
                <div className='w-full flex items-center justify-center gap-3'>
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4">
                        <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" />
                    </svg>
                    <h3 className='text-center'>Work in motion</h3>
                </div>

                <h1 className='w-full flex justify-center sm:gap-80 gap-32 items-center'>
                    <div ref={play} className='text-3xl sm:text-6xl font-light'>Play</div>
                    <div ref={reel} className='text-3xl sm:text-6xl font-light'>Reel</div>
                </h1>
                <p className='text-center px-10 text-xs '>
                    Our work is best experienced in motion. Don't forget to put on your headphones.
                </p>
            </div>


        </div>
    )
}

export default PlayReel
