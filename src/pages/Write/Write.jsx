import React from 'react'
import { MdAddPhotoAlternate } from 'react-icons/md'
import './write.css'

export default function Write() {
  return (
    <div className='write'>
      {/* img when its upload */}
      <form className='form'>
        <div className='form--group file--group'>
          <label htmlFor='input--file'>
            <MdAddPhotoAlternate className='input--icon-add' alt='add photo'/>
          </label>
          <input type='file' id='input--file' className='input--file' />
          <input
            type='text'
            placeholder='title'
            autoFocus={true}
            className='input--text'
          />
        </div>
        <div className='form--group'>
          <textarea
            input='text'  
            placeholder='here goes your story'
            className='input--text input--blog'
          >
          </textarea>
        </div>
          <button className='btn btn--publish'>publish</button>
      </form>
    </div>
  )
}
