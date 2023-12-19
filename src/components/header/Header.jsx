import React from 'react'
import './header.css'

import { LuUserCircle } from 'react-icons/lu'
import { IoSearchOutline } from 'react-icons/io5'

export default function Header() {
  return (
    <header>
      <h2 className='header--logo'>BLOG</h2>

      <nav className='nav'>
        <ul className='nav--list'>
          <li className='nav--item'>
            <a href='#' className='nav--link'>
              home
            </a>
          </li>
          <li className='nav--item'>
            <a href='#' className='nav--link'>
              about
            </a>
          </li>
          <li className='nav--item'>
            <a href='#' className='nav--link'>
              contact
            </a>
          </li>
          <li className='nav--item'>
            <a href='#' className='nav--link'>
              write
            </a>
          </li>
        </ul>
      </nav>

      <div className='header--icon'>
        <a href='#' className='nav--link'>
          login
        </a>
        <LuUserCircle className='user-icon' />
        <IoSearchOutline className='search-icon' />
      </div>
    </header>
  )
}
