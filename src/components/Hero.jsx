import React from 'react'
import { SocialIcon } from 'react-social-icons'

export default function Hero () {
  return (
    <div className='container'>
      
      <div className='wrapper'>
        <section className='hero'>
          <h5>
            I'm Del, a full stack developer, with a strong creative
            background, experienced in providing rapid, robust front and
            back-end web development, optimizing user experience into
            innovative, interactive solutions. Proven ability working within
            cross-functional teams, possessing strong interpersonal skills in
            high-demand settings.
          </h5>
          <SocialIcon
            className='social'
            url='https://www.linkedin.com/in/delwingmanzueta/'
            target='blank'
            label='LinkedIn Profile'
          />
          <SocialIcon
            className='social'
            url='https://github.com/DelManzueta'
            bgColor='#fff'
            target='blank'
            label='GitHub Profile'
          />
        </section>
      </div>
    </div>
  )
}
