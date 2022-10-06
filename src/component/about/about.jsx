import React from 'react'
import "./about.css"
import ME from '../../Assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
        <div className="about_me-image">
          <img src={ME} alt='About Image'/>
        </div>
        </div>
      </div>
      <div className="about_content">
        <div className="about-cards">
          <article className='about_card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>3 years working Experience</small>
          </article>

          <article className='about_card'>
            <FiUsers className='about_icon'/>
            <h5>Clients</h5>
            <small>300+ Clients world wide</small>
          </article>

          <article className='about_card'>
            <VscFolderLibrary className='about_icon'/>
            <h5>Projects</h5>
            <small>80+ Completed</small>
          </article>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quae, esse libero repellat ipsum commodi, voluptates fugit, eaque quibusdam eius incidunt nam nemo ab vitae odio laboriosam omnis similique praesentium!
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>

    </section>
  )
}

export default about