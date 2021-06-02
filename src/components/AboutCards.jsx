import React from 'react'
import '../styles/ac.css'

const AboutCards = () => {
  return (
    <div className='ac-container'>
      <section className='ac-section ac-section-padded'>
        <div className='section-container'>
          <div className='ac-row title'> 
            <h2>A few highlights</h2>
            <h6 className='sub-copy'>
               a better understanding of my progression
            </h6>
          </div>
          <div className='ac-row services'>
            <div className='ac-col'>
              <div className='service'>
                <div className='icon-holder'>
                  <img src='img/icons/heart-blue.png' alt='' className='icon' />
                </div>
                <h4 className='heading'>Front-End Dev</h4>
                <p className='description'>
                  A bit new to the game, yet experienced in delivering rapid, robust
                  front-end web development 
                </p>
              </div>
            </div>
            <div className='ac-col'>
              <div className='service'>
                <div className='icon-holder'>
                  <img src='img/icons/guru-blue.png' alt='' className='icon' />
                </div>
                <h4 className='heading'>Visual Design</h4>
                <p className='description'>
                  A elementum ligula lacus ac quam ultrices a scelerisque
                  praesent vel suspendisse scelerisque a aenean hac montes.
                </p>
              </div>
            </div>
            <div className='ac-col'>
              <div className='service'>
                <div className='icon-holder'>
                  <img
                    src='img/icons/weight-blue.png'
                    alt=''
                    className='icon'
                  />
                </div>
                <h4 className='heading'>Critical Thinking</h4>
                <p className='description'>
                  A elementum ligula lacus ac quam ultrices a scelerisque
                  praesent vel suspendisse scelerisque a aenean hac montes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutCards
