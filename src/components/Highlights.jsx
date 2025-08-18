import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { rightImg, watchImg } from '../utils';
import VideoCarousel from './VideoCarousel';

const Highlights = () => {

  useGSAP(() => {
    gsap.to('#title', { y: 0, opacity: 1 })
    gsap.to('.link', { y: 0, opacity: 1, stagger: 0.25})
  })
  
  return (
    <section id="highlights" className='w-screen h-full overflow-hidden common-padding bg-zinc'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full md:flex items-end justify-between'>
          <h1 id="title" className='section-heading'>Get the highlights.</h1>

          <div className='flex flex-wrap gap-5 items-end'>
            <a href='https://youtu.be/dQw4w9WgXcQ?si=79KL566J4T4vRT9a'><p className='link'>
              Watch the film
              <img src={watchImg} alt="watch" className='ml-2' />
            </p></a>
            <a href='https://youtu.be/dQw4w9WgXcQ?si=79KL566J4T4vRT9a'><p className='link'>
              Watch the event
              <img src={rightImg} alt="right" className='ml-2' />
            </p></a>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  )
}

export default Highlights