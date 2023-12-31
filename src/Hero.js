import React from 'react'
import phoneImg from './images/phone.svg'
import { useGlobalContext } from './context'

const Hero = () => {
  const {closeSubmenu} = useGlobalContext();
  return( <section className='hero' onMouseOver={closeSubmenu}>
   <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payments Infrastructure for the internet</h1>
        <p>
          Milions of companies of all sizes-from startups to Fortune 500s-use

          Stripes's software and APIs to accept payments, send payouts
          and 
          Manage their business online.
        </p>
        <button className='btn'>Start Now</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone'/>
        </article>
   </div>

  </section>
  );
}

export default Hero
