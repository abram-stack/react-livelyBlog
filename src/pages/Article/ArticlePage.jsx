import React from 'react'
import './articlePage.css'

import Article from '../../components/article/Article';
import Sidebar from '../../components/sidebar/Sidebar';


export default function ArticlePage() {
  return (
    <div className='article-page--container'>
      <Article />
      <Sidebar/>
    </div>
  )
}
