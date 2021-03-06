import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  staggerRevealClose
} from './Animations'

const Hamburger = ({ state }) => {
  // Create variables of our dom nodes
  let menuLayer = useRef(null)
  let reveal1 = useRef(null)
  let reveal2 = useRef(null)
  // eslint-disable-next-line
  let reveal3 = useRef(null)
  let line1 = useRef(null)
  let line2 = useRef(null)
  let line3 = useRef(null)
  let info = useRef(null)

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1)
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: 'none' } })
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: 'block' } })
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: '100%'
      })
      staggerReveal(reveal1, reveal2)
      fadeInUp(info)
      staggerText(line1, line2, line3)
    }
  }, [state])

  return (
    <div ref={el => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'
      ></div>
      <div ref={el => (reveal2 = el)} className='menu-layer'>
        <div className='container'>
          <div className='burger-wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line1 = el)}
                      to='/'
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line1 = el)}
                      to='/about'
                    >
                      About 
                    </Link>
                  </li>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line2 = el)}
                      to='/portfolio'
                    >
                      Portfolio
                    </Link>
                  </li> 
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line3 = el)}
                      to='/contact'
                    >
                      Connect
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={el => (info = el)} className='info'>
                <SocialIcon
                  className='social-ham'
                  url='https://www.linkedin.com/in/delwingmanzueta/'
                  target='blank'
                  label='LinkedIn Profile'
                />
                <SocialIcon
                  className='social-ham'
                  url='https://github.com/DelManzueta'
                  target='blank'
                  label='GitHub Profile'
                />
                <SocialIcon
                  className='social-ham'
                  url='https://www.instagram.com/zueta/'
                  target='_new'
                  label='Instagram'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hamburger
