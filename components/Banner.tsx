import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='relative'>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image loading='lazy' src="https://links.papareact.com/gi1" alt="banner-1" />
        </div>
        <div>
          <Image loading='lazy' src="https://links.papareact.com/6ff" alt="banner-2" />
        </div>
        <div>
          <Image loading='lazy' src="https://links.papareact.com/7ma" alt="banner-3" />
        </div>
      </Carousel>
    </div>
  )
}

export default Banner