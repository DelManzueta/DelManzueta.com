import React from 'react'
import { SocialIcon } from 'react-social-icons'
import logo from '../img/res_logo.png'

export default function Hero () {
  return (
    <div id='top-page' className='home-container'>
      <section className='hero'>
        <img src={logo} alt="" />
        <span className='hero-header'>
          Designer <span>&amp;</span> Developer 
        </span>
        <section className='hero-copy'>
          <h5>
            ...with a strong creative background, experienced in providing
            rapid, robust front and back-end web development, optimizing user
            experience into innovative, interactive solutions
          </h5>
        </section>
      </section>
      <section className='hero-social'>
        <SocialIcon
          className='social'
          url='https://www.linkedin.com/in/delwingmanzueta/'
          target='_new'
          label='LinkedIn Profile'
        />
        <SocialIcon
          className='social'
          url='https://github.com/DelManzueta' 
          target='_new'
          label='GitHub Profile'
        />
        <SocialIcon
          className='social'
          url='https://www.instagram.com/zueta/'
          target='_new'
          label='Instagram'
        />
      </section>
    </div>
  )
}
