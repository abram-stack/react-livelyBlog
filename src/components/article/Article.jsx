import React from 'react'
import './article.css'
import articleImg  from '../../assets/greyscale-nat-american.jpg'
import { RiEdit2Line } from 'react-icons/ri'
import { GoTrash } from 'react-icons/go'


export default function Article() {
  return (
    <div className='article'>
      <div className='article--wrapper'>
        <img className='article--img' src={articleImg} />
        <h1 className='article--title'>Article single post</h1>
        <div className='article--actions'>
          <RiEdit2Line className='actions--icon-edit' />
          <GoTrash className='actions--icon-delete' />
        </div>

        <div className='article--info'>
          <p>
            By <span className='article--author'>Sofie Mathson</span>
          </p>
          <p className='article--date'>
            published <span>23 Jan 2024</span>
          </p>
        </div>
        <div className='article--text'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, vero
            dolore? Recusandae totam, exercitationem earum fuga, magnam
            reiciendis voluptate blanditiis facere, consectetur nobis assumenda
            non delectus cum ab eveniet dolorum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Vitae, sit! Quos officia
            necessitatibus quidem corrupti placeat totam nulla ducimus eaque,
            laboriosam reprehenderit sint unde reiciendis facere rerum nostrum
            possimus ipsum natus tenetur iure recusandae a obcaecati architecto
            veniam? Quibusdam, distinctio.
          </p>

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium sint nulla esse iusto est, architecto maiores doloribus repudiandae voluptas sequi aliquid, numquam voluptate porro delectus neque quisquam, consectetur labore illo nesciunt dicta id. Minus accusantium soluta repellat repellendus excepturi nam aut saepe animi, hic, voluptatum esse ad corrupti reiciendis distinctio?</p>
        </div>
      </div>
    </div>
  )
}
