import React from 'react'
import '../styles/about.css'
import selfie from '../img/me.jpg'

export default function About () {
  return (
    <div className='grid-demo'>
      <div className='about-container'>
        <h2>CSS Grid Example</h2> 
        <div className='section row'>
          <div className='col grid_1_of_3'>
            <img src={selfie} alt="" />
          </div>
          <div className='col grid_2_of_3'>
            <div className='col grid_1_of_2'>
              two quantities are in the golden ratio if the ratio of the sum of
              the quantities to the larger quantity is equal to the ratio of the
              larger quantity to the smaller one. It has a value of 1.618. If
              you use a grid of eight, and split into five columns and three
              columns the ratio is 1.66, which is pretty close.
            </div>
            <div className='col grid_1_of_2'>
              two quantities are in the golden ratio if the ratio of the sum of
              the quantities to the larger quantity is equal to the ratio of the
              larger quantity to the smaller one. It has a value of 1.618. If
              you use a grid of eight, and split into five columns and three
              columns the ratio is 1.66, which is pretty close.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
