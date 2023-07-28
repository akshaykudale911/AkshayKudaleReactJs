import React from 'react'
import "./about.css"
import ME from '../../Assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_position">
            <img src={ME} alt='AboutMe' />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>3.9 years working Experience</small>
            </article>

            <article className="about_card">
              <FiUsers className='about_icon' />
              <h5>Worked At</h5>
              <small>Square Vision Technologies</small><br/><br/>
              <small>Wipro Technologies</small><br/><br/>
              <small>Cloudesign Technology Solutions</small><br/>
            </article>

            <article className="about_card">
              <VscFolderLibrary className='about_icon' />
              <h5>Projects</h5>
              <small>CalSmart Manager</small><br/><br/>
              <small>GPAT</small><br/><br/><br/>
              <small>StickSecure</small><br/>
            </article>
          </div>
          <p>
          <strong>3 Years 11 Months</strong> of experience in implementing <strong>C# .Net technologies.</strong>
          Worked with <strong>SQL Server 2022.</strong>
          Having good knowledge and experience in <strong>Asp.net Core, Asp.net MVC, Entity
Framework, NET Framework 4.0.</strong>
          Have good knowledge in OOPs Concepts and implementation.
          Proficient in <strong>SQL Server, HTML.</strong>
          Exposure to <strong>JavaScript, jQuery.</strong>
          {/* Familiar with services like Web API.
          Familiar with testing tools Fiddler, Postman, Swagger UI.<br/>
          Excellent Inter-Personal and Communication skills and the ability to work efficiently,
quick learning& working with new technologies to fulfil project needs. */}
          </p>
          {/* <a href='#contact' className='btn btn-primary' text>Let's Talk</a> */}
          </div>
      </div>
    </section>
  )
}

export default about