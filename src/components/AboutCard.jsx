import React from 'react'
import { SocialIcon } from 'react-social-icons'
import '../styles/ac.css'

const AboutCard = () => {
  return (
    <div className='ac-wrapper'>
      <div className='ac-header'>
        <section className='ac-divider' />
        <h1>Here's a glimpse into whom you'll be hiring</h1>
      </div>
      <div className='main'>
        <div className='ac-column'>
          <div className='timeline-title'>
            <h3>1982</h3>
            <h1>And then there was light...</h1>
          </div>
          <div class='description'>
            <p>
              Born on a muggy, rainy, Monday morning in Queens - the heat wave
              that was suffocating the Northeast was enough to send my mother
              into labor a week early. But the rumor was, it was my inability to
              sit still in confined spaces that was the real culprit.
            </p>
            <section className='ac-divider' />
          </div>
        </div>

        <div className='ac-column'>
          <div className='timeline-title'>
            <h3>1989-1995</h3>
            <h1>Curiosity spawns creativity</h1>
          </div>
          <div class='description'>
            <p>
              Like many others, my formative years were paramount for my
              development into a creative adult. As the youngest of four, my
              innate curiosity and creativity stood out from our culturally
              biased upbringing. While my cousins were spending their communion
              money on Voltron and Thunder-Cats action figures, I decided to buy
              my first two records: The Adventures of Slick Rick and Livin' On A
              Prayer 45. Being the youngest also meant I was forced to watch my
              older siblings fight over TV rights and who would be Player 1 and
              2. That down-time did me justice because I then found solace in
              comic books, once again, spending birthday money on as much
              Spider-Man as I could find - what can I say, we're both a couple
              of kids from Queens. But everything drastically changed when I was
              gifted my first PC, an IBM 486 with a whopping 8MB of ram.
            </p>
            <section className='ac-divider' />
          </div>
        </div>
        <div className='ac-column'>
          <div className='timeline-title'>
            <h3>1996-2000</h3>
            <h1>aol, html, photoshop, graffiti &amp; art</h1>
          </div>
          <div class='description'>
            <p>
              By now, my life was consumed by POGs, Slammers, the Marvel &amp;
              DC Universes, Image Comics, Baseball cards, and hip-hop cassettes
              I had to hide from my parents.
            </p>
            <section className='ac-divider' />
          </div>
        </div>

        <div className='ac-column'>
          <div className='timeline-title'>
            <h3>2000-2005</h3>
            <h1>life, css, javascript, c#</h1>
          </div>
          <div class='description'>
            <p>
              Americký vynálezca v tomto roku prezentoval tunelový systém, v
              ktorom sa pomocou stlačeného vzduchu pohybovala transportná bunka
              valcovitého tvaru. Na dráhe premávala kyvadlovým spôsobom jedna
              transportná kapsula. Pohyb zabezpečoval pneumatický kompresor,
              ktorý v jednom smere kapsulu “vytláčal” a v druhom smere
              ”nasával”. Bola vybudovaná aj skúšobná dráha, ktorá istý čas
              fungovala ale projekt bol zamietnutý a v dôsledku krachu americkej
              burzy sa ho nepodarilo oživiť.
            </p>
            <section className='ac-divider' />
          </div>
        </div>

        <div className='ac-column'>
          <div className='timeline-title'>
            <h3>2005-2008</h3>
            <h1>junior graphic designer</h1>
          </div>
          <div class='description'>
            <p>
              Americký vynálezca v tomto roku prezentoval tunelový systém, v
              ktorom sa pomocou stlačeného vzduchu pohybovala transportná bunka
              valcovitého tvaru. Na dráhe premávala kyvadlovým spôsobom jedna
              transportná kapsula. Pohyb zabezpečoval pneumatický kompresor,
              ktorý v jednom smere kapsulu “vytláčal” a v druhom smere
              ”nasával”. Bola vybudovaná aj skúšobná dráha, ktorá istý čas
              fungovala ale projekt bol zamietnutý a v dôsledku krachu americkej
              burzy sa ho nepodarilo oživiť.
            </p>
            <section className='ac-divider' />
          </div>
        </div>

        <div className='ac-column'>
          <div className='timeline-title'>
            <h3>2009-2012</h3>
            <h1>graphic &amp; web designer</h1>
          </div>
          <div class='description'>
            <p>
              Americký vynálezca v tomto roku prezentoval tunelový systém, v
              ktorom sa pomocou stlačeného vzduchu pohybovala transportná bunka
              valcovitého tvaru. Na dráhe premávala kyvadlovým spôsobom jedna
              transportná kapsula. Pohyb zabezpečoval pneumatický kompresor,
              ktorý v jednom smere kapsulu “vytláčal” a v druhom smere
              ”nasával”. Bola vybudovaná aj skúšobná dráha, ktorá istý čas
              fungovala ale projekt bol zamietnutý a v dôsledku krachu americkej
              burzy sa ho nepodarilo oživiť.
            </p>
            <section className='ac-divider' />
          </div>
        </div>
        <div className='ac-column'>
          <div className='timeline-title'>
            <h3>2013-2019</h3>
            <h1>senior designer and COVID</h1>
          </div>
          <div class='description'>
            <p>
              Americký vynálezca v tomto roku prezentoval tunelový systém, v
              ktorom sa pomocou stlačeného vzduchu pohybovala transportná bunka
              valcovitého tvaru. Na dráhe premávala kyvadlovým spôsobom jedna
              transportná kapsula. Pohyb zabezpečoval pneumatický kompresor,
              ktorý v jednom smere kapsulu “vytláčal” a v druhom smere
              ”nasával”. Bola vybudovaná aj skúšobná dráha, ktorá istý čas
              fungovala ale projekt bol zamietnutý a v dôsledku krachu americkej
              burzy sa ho nepodarilo oživiť.
            </p>
            <section className='ac-divider' />
          </div>
        </div>
      </div>
      <aside className='aside aside-1'>
        <h1>Download my resume</h1>
        <button>Download</button>
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
      </aside>
    </div>
  )
}

export default AboutCard
