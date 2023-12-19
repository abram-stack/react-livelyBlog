import React from 'react'
import './hero.css'
import heroImg from '../../assets/heroImage.jpg'

export default function Hero() {
  return (
    <div className='hero'>
      <div className='hero--title'>
        <span className='hero--title-sm'>Medium</span>
        <span className='hero--title-lg'>Blog</span>
      </div>
      <img
        className='hero--img'
        src={heroImg}
        alt='Man in Harbor Looking at Sea'
      />
    </div>
  )
}
