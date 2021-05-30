import React from 'react'
import '../styles/ac.css'
import Dev from '../img/dev.png'
import Spray from '../img/spray.png'
import Graph from '../img/design.png'

const AboutCards = () => {
  return (
    <div class='ac-container'>
      <div class='card'>
        <div class='face face1'>
          <div class='content'>
            <div class='icon'>
              <img src={Dev} alt="" />
            </div>
          </div>
        </div>
        <div class='face face2'>
          <div class='content'>
            
            <p>This is where I network and build my professional portfolio.</p>
          </div>
        </div>
      </div>
      <div class='card'>
        <div class='face face1'>
          <div class='content'>
            <div class='icon'>
              <img src={Graph} alt="" />
            </div>
          </div>
        </div>
        <div class='face face2'>
          <div class='content'>
            
            <p>
              This is where I read news and network with different social
              groups.
            </p>
          </div>
        </div>
      </div>
      <div class='card'>
        <div class='face face1'>
          <div class='content'>
            <div class='icon'>
              <img src={Spray} alt="" />
            </div>
          </div>
        </div>
        <div class='face face2'>
          <div class='content'> 
            <p>This is where I share code and work on projects.</p>
          </div>
        </div>
        
      </div> 
    </div>
  )
}

export default AboutCards
