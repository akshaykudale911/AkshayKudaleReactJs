import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsJournalText} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineContacts} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  return (
    <nav>
      <a href='#home' onClick={() => setActiveNav('#home')} 
       className={activeNav === '#home' ? 'active' :''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} 
      className={activeNav === '#about' ? 'active' :''}><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} 
      className={activeNav === '#experience' ? 'active' :''}><BsJournalText/></a>
      <a href='#servicess' onClick={() => setActiveNav('#servicess')} 
      className={activeNav === '#servicess' ? 'active' :''}><RiServiceLine/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} 
      className={activeNav === '#contact' ? 'active' :''}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav