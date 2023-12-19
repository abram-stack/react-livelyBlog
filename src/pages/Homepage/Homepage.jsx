import React from 'react'
import Hero from '../../components/hero/Hero'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import './homepage.css'

export default function Homepage() {
  return (
    <div className='homepage--container'>
      <Hero />
      
      <div className='home--content'>
        <Posts />
        <Sidebar/>
      </div>
    </div>
  )
}
