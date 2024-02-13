import React from 'react'
import './hero.css'
import heroImg from '../../assets/heroImage2.jpg'

export default function Hero() {
  return (
    <div className='hero'>
      <div className='hero--title'>
        <span className='hero--title-sm'>Latest Story</span>
        <span className='hero--title-lg'>Travel Journey</span>
      </div>
      <img
        className='hero--img'
        src={heroImg}
        alt='Tea field in Indonesia'
      />
    </div>
  )
}
