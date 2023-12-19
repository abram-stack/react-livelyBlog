import React from 'react'
import aboutImage from '../../assets/aboutImage.jpg'
import { CiTwitter } from 'react-icons/ci'
import { CiInstagram } from 'react-icons/ci'
import { PiPinterestLogoLight } from 'react-icons/pi'


import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar--item'>
        <span className='sidebar--title'>ABOUT me</span>
        <img src={aboutImage} alt='woman watering plants' />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          velit placeat ad ex delectus dignissimos repudiandae odit quam quos
          doloremque.
        </p>
      </div>

      <div className='sidebar--item'>
        <span className='sidebar--title'>Categories</span>
        <ul className='sidebar--list grid'>
          <li className='sidebar--list-item'>Lifestyle</li>
          <li className='sidebar--list-item'>music</li>
          <li className='sidebar--list-item'>sport</li>
          <li className='sidebar--list-item'>sustainability</li>
          <li className='sidebar--list-item'>tech</li>
        </ul>
      </div>

      <div className='sidebar--item'>
        <span className='sidebar--title'>Follow me</span>
        <div className='sidebar--socials'>
          <a href='#' className='sidebar--icon'>
            <CiTwitter />
          </a>
          <a href='#' className='sidebar--icon'>
            <CiInstagram className='sidebar--icon' />
          </a>
          <a href='#' className='sidebar--icon'>
            <PiPinterestLogoLight className='sidebar--icon' />
          </a>
        </div>
      </div>
    </div>
  )
}
