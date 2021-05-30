import React from 'react'
import '../styles/about.css'
import selfie from '../img/me.jpg'

export class About extends React.Component {
  render () {
    return (
      <div>
        <section className='about-container'>
          <div className='row'>
            <div className='col grid_1_of_3'>
              <img className='del-img' src={selfie} alt='' />
            </div>
            <div className='col grid_2_of_3'>
              <div className='about-main'>
                <h1>Allow me to reintroduce myself,</h1>
                <div className='col grid_2_of_2'>
                  <p className='about-txt'>
                    My name is Del - and after a long career as a visual
                    designer, specializing in UX/UI &amp; Front-End Design, I've
                    decided to make the full transition into web development,
                    with a direct focus on the MERN stack. My ability to
                    translate client needs into successful user-centered design
                    for print and digital products opened the door to web
                    design, which lead to working directly with front-end
                    technologies such as HTML, CSS and a bit of JavaScript.
                  </p>
                </div>
                <div className='col grid_2_of_2'>
                  <p className='about-txt'>
                    My interest in web development grew when I realized my
                    natural creative talent was perfectly complimented with my
                    passion for problem solving, allowing me to translate
                    complex ideas into innovative solutions. Aside from my
                    technical abilities, my strengths lie in anticipating
                    uncommon issues regarding usability, and production, as well
                    as performing at the highest standards, regardless of
                    capacity and limitations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='col grid_2_of_2'>
          <p className='about-txt'>
            My interest in web development grew when I realized my natural
            creative talent was perfectly complimented with my passion for
            problem solving, allowing me to translate complex ideas into
            innovative solutions. Aside from my technical abilities, my
            strengths lie in anticipating uncommon issues regarding usability,
            and production, as well as performing at the highest standards,
            regardless of capacity and limitations.
          </p>
        </section>

        <section className='col grid_2_of_2'>
          <p className='about-txt'>
            My interest in web development grew when I realized my natural
            creative talent was perfectly complimented with my passion for
            problem solving, allowing me to translate complex ideas into
            innovative solutions. Aside from my technical abilities, my
            strengths lie in anticipating uncommon issues regarding usability,
            and production, as well as performing at the highest standards,
            regardless of capacity and limitations.
          </p>
          <p className='about-txt'>
            My interest in web development grew when I realized my natural
            creative talent was perfectly complimented with my passion for
            problem solving, allowing me to translate complex ideas into
            innovative solutions. Aside from my technical abilities, my
            strengths lie in anticipating uncommon issues regarding usability,
            and production, as well as performing at the highest standards,
            regardless of capacity and limitations.
          </p>
          <p className='about-txt'>
            My interest in web development grew when I realized my natural
            creative talent was perfectly complimented with my passion for
            problem solving, allowing me to translate complex ideas into
            innovative solutions. Aside from my technical abilities, my
            strengths lie in anticipating uncommon issues regarding usability,
            and production, as well as performing at the highest standards,
            regardless of capacity and limitations.
          </p>
        </section>
      </div>
    )
  }
}
