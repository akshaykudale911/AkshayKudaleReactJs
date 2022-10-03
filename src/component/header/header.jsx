import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Assets/me.png'
import HeaderSocial from './HeaderSocial'

const header = () => {
  return (
    <header>
      <div id='home' className="container header_container">
        <h5>Hello I'm </h5>
        <h1>Akshay Kudale</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        <CTA/>
        <HeaderSocial/>

        <div className='me'>
          <img src={ME} alt='me'/>
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header