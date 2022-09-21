import React from 'react'
import './header.css'

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm </h5>
        <h1>Akshay Kudale</h1>
        <h5 className='text-light'>Full Stack Developer</h5>
        
      </div>
    </header>
  )
}

export default header