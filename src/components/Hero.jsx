import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { smallHeroVideo, heroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(
        window.innerWidth < 760 ? smallHeroVideo : heroVideo
    )

    const handleVideoSrcSet = () => {
        window.innerWidth < 760 ? setVideoSrc(smallHeroVideo)
            : setVideoSrc(heroVideo);
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet);
        return () => {
            window.removeEventListener('resize', handleVideoSrcSet);
        }
    }, [])

    useGSAP(() => {
        gsap.to('#hero', { y:10, opacity: 1, delay:  2})

        gsap.to('#cta', { y:-50, opacity: 1, delay: 2, ease: 'power1.inOut'})
    }, [])
    return (
        <section className='w-full nav-height'>
            <div className='h-5/6 w-full flex-center flex-col'>
                <p id='hero' className='hero-title'>iPhone 15</p>

                <div className="md:w-10/12 w-8/12">
                    <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>

                <div id="cta" className="flex flex-col items-center opacity-0 translate-y-5">
                    <a href="#highlights" className='btn'>Buy</a>
                    <p className="font-normal text-center text-xl">From $199/month or $999</p>
                </div>
            </div>
        </section>
    )
}

export default Hero;