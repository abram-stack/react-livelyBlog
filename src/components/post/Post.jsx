import React from 'react'
import './post.css'
import coffeeImage from '../../assets/coffeeHarvest.jpg'

export default function Post() {
  return (
    <div className='post'>
      <img className='post--img' src={coffeeImage} />

      <div className='post--categories grid'>
        <span className='post--category'>musci</span>
        <span className='post--category'>lifestyle</span>
        <span className='post--category'>lifestyle</span>
        <span className='post--category'>lifestyle</span>
        <span className='post--category'>lifestyle</span>
      </div>

      <h2 className='post--title'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h2>

      <p className='post--description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, atque
        facere similique eveniet odit ipsam officia omnis nulla modi error
        facilis in alias incidunt quam. Placeat, quos iusto. Perspiciatis qui
        cupiditate delectus ut facilis corporis inventore ullam nihil eveniet?
        Cupiditate pariatur molestiae hic quidem ex officiis nulla. Illum,
        officiis alias!
      </p>
    </div>
  )
}
